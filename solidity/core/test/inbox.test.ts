import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { types, utils } from '@abacus-network/utils';
import { Validator } from './lib/core';
import {
  BadRecipient1__factory,
  BadRecipient3__factory,
  BadRecipient5__factory,
  BadRecipient6__factory,
  BadRecipientHandle__factory,
  TestInbox,
  TestInbox__factory,
  ValidatorManager,
  ValidatorManager__factory,
  TestRecipient__factory,
} from '../types';

const merkleTestCases = require('../../../vectors/merkle.json');
const proveAndProcessTestCases = require('../../../vectors/proveAndProcess.json');

const localDomain = 2000;
const remoteDomain = 1000;

describe('Inbox', async () => {
  const badRecipientFactories = [
    BadRecipient1__factory,
    BadRecipient3__factory,
    BadRecipient5__factory,
    BadRecipient6__factory,
  ];

  let inbox: TestInbox,
    validatorManager: ValidatorManager,
    signer: SignerWithAddress,
    fakeSigner: SignerWithAddress,
    abacusMessageSender: SignerWithAddress,
    validator: Validator,
    fakeValidator: Validator;

  before(async () => {
    [signer, fakeSigner, abacusMessageSender] = await ethers.getSigners();
    validator = await Validator.fromSigner(signer, remoteDomain);
    fakeValidator = await Validator.fromSigner(fakeSigner, remoteDomain);
    const validatorManagerFactory = new ValidatorManager__factory(signer);
    validatorManager = await validatorManagerFactory.deploy();
    await validatorManager.enrollValidator(remoteDomain, validator.address);
  });

  beforeEach(async () => {
    const inboxFactory = new TestInbox__factory(signer);
    inbox = await inboxFactory.deploy(localDomain);
    await inbox.initialize(
      remoteDomain,
      validatorManager.address,
      ethers.constants.HashZero,
      0,
    );
  });

  it('Cannot be initialized twice', async () => {
    await expect(
      inbox.initialize(
        remoteDomain,
        validatorManager.address,
        ethers.constants.HashZero,
        0,
      ),
    ).to.be.revertedWith('Initializable: contract is already initialized');
  });

  it('Accepts signed checkpoint from validator', async () => {
    const root = ethers.utils.formatBytes32String('first new root');
    const index = 1;
    const { signature } = await validator.signCheckpoint(root, index);
    await inbox.checkpoint(root, index, signature);
    const [croot, cindex] = await inbox.latestCheckpoint();
    expect(croot).to.equal(root);
    expect(cindex).to.equal(index);
  });

  it('Rejects signed checkpoint from non-validator', async () => {
    const root = ethers.utils.formatBytes32String('first new root');
    const index = 1;
    const { signature } = await fakeValidator.signCheckpoint(root, index);
    await expect(inbox.checkpoint(root, index, signature)).to.be.revertedWith(
      '!validator sig',
    );
  });

  it('Rejects old signed checkpoint from validator', async () => {
    let root = ethers.utils.formatBytes32String('first new root');
    let index = 10;
    let { signature } = await validator.signCheckpoint(root, index);
    await inbox.checkpoint(root, index, signature);
    const [croot, cindex] = await inbox.latestCheckpoint();
    expect(croot).to.equal(root);
    expect(cindex).to.equal(index);

    root = ethers.utils.formatBytes32String('second new root');
    index = 9;
    ({ signature } = await validator.signCheckpoint(root, index));
    await expect(inbox.checkpoint(root, index, signature)).to.be.revertedWith(
      'old checkpoint',
    );
  });

  it('Proves a valid message', async () => {
    // Use 1st proof of 1st merkle vector test case
    const testCase = merkleTestCases[0];
    let { leaf, index, path } = testCase.proofs[0];

    await inbox.setCheckpoint(testCase.expectedRoot, 1);

    // Ensure proper static call return value
    expect(await inbox.callStatic.prove(leaf, path as types.BytesArray, index))
      .to.be.true;

    await inbox.prove(leaf, path as types.BytesArray, index);
    expect(await inbox.messages(leaf)).to.equal(types.MessageStatus.PENDING);
  });

  it('Rejects an already-proven message', async () => {
    const testCase = merkleTestCases[0];
    let { leaf, index, path } = testCase.proofs[0];

    await inbox.setCheckpoint(testCase.expectedRoot, 1);

    // Prove message, which changes status to MessageStatus.Pending
    await inbox.prove(leaf, path as types.BytesArray, index);
    expect(await inbox.messages(leaf)).to.equal(types.MessageStatus.PENDING);

    // Try to prove message again
    await expect(
      inbox.prove(leaf, path as types.BytesArray, index),
    ).to.be.revertedWith('!MessageStatus.None');
  });

  it('Rejects invalid message proof', async () => {
    // Use 1st proof of 1st merkle vector test case
    const testCase = merkleTestCases[0];
    let { leaf, index, path } = testCase.proofs[0];

    // Switch ordering of proof hashes
    // NB: We copy 'path' here to avoid mutating the test cases for
    // other tests.
    const newPath = [...path];
    newPath[0] = path[1];
    newPath[1] = path[0];

    await inbox.setCheckpoint(testCase.expectedRoot, 1);

    expect(
      await inbox.callStatic.prove(leaf, newPath as types.BytesArray, index),
    ).to.be.false;

    await inbox.prove(leaf, newPath as types.BytesArray, index);
    expect(await inbox.messages(leaf)).to.equal(types.MessageStatus.NONE);
  });

  it('Processes a proved message', async () => {
    const sender = abacusMessageSender;

    const testRecipientFactory = new TestRecipient__factory(signer);
    const testRecipient = await testRecipientFactory.deploy();

    const nonce = 0;
    const abacusMessage = utils.formatMessage(
      remoteDomain,
      sender.address,
      nonce,
      localDomain,
      testRecipient.address,
      '0x',
    );

    // Set message status to types.MessageStatus.Pending
    await inbox.setMessageProven(abacusMessage);

    const processTx = inbox.process(abacusMessage);
    await expect(processTx)
      .to.emit(inbox, 'Process')
      .withArgs(utils.messageHash(abacusMessage));
  });

  it('Fails to process an unproved message', async () => {
    const [sender, recipient] = await ethers.getSigners();
    const nonce = 0;
    const body = ethers.utils.formatBytes32String('message');

    const abacusMessage = utils.formatMessage(
      remoteDomain,
      sender.address,
      nonce,
      localDomain,
      recipient.address,
      body,
    );

    await expect(inbox.process(abacusMessage)).to.be.revertedWith('!proven');
  });

  for (let i = 0; i < badRecipientFactories.length; i++) {
    it(`Fails to process a message for a badly implemented recipient (${
      i + 1
    })`, async () => {
      const sender = abacusMessageSender;
      const factory = new badRecipientFactories[i](signer);
      const badRecipient = await factory.deploy();

      const nonce = 0;
      const abacusMessage = utils.formatMessage(
        remoteDomain,
        sender.address,
        nonce,
        localDomain,
        badRecipient.address,
        '0x',
      );

      // Set message status to MessageStatus.Pending
      await inbox.setMessageProven(abacusMessage);
      await expect(inbox.process(abacusMessage)).to.be.reverted;
    });
  }

  it('Fails to process message with wrong destination Domain', async () => {
    const [sender, recipient] = await ethers.getSigners();
    const nonce = 0;
    const body = ethers.utils.formatBytes32String('message');

    const abacusMessage = utils.formatMessage(
      remoteDomain,
      sender.address,
      nonce,
      // Wrong destination Domain
      localDomain + 5,
      recipient.address,
      body,
    );

    await expect(inbox.process(abacusMessage)).to.be.revertedWith(
      '!destination',
    );
  });

  it('Fails to process message sent to a non-existent contract address', async () => {
    const nonce = 0;
    const body = ethers.utils.formatBytes32String('message');

    const abacusMessage = utils.formatMessage(
      remoteDomain,
      abacusMessageSender.address,
      nonce,
      localDomain,
      '0x1234567890123456789012345678901234567890', // non-existent contract address
      body,
    );

    // Set message status to types.MessageStatus.Pending
    await inbox.setMessageProven(abacusMessage);
    await expect(inbox.process(abacusMessage)).to.be.reverted;
  });

  it('Fails to process a message for bad handler function', async () => {
    const sender = abacusMessageSender;
    const [recipient] = await ethers.getSigners();
    const factory = new BadRecipientHandle__factory(recipient);
    const testRecipient = await factory.deploy();

    const nonce = 0;
    const abacusMessage = utils.formatMessage(
      remoteDomain,
      sender.address,
      nonce,
      localDomain,
      testRecipient.address,
      '0x',
    );

    // Set message status to MessageStatus.Pending
    await inbox.setMessageProven(abacusMessage);

    // Ensure bad handler function causes process to fail
    await expect(inbox.process(abacusMessage)).to.be.reverted;
  });

  it('Proves and processes a message', async () => {
    const sender = abacusMessageSender;
    const testRecipientFactory = new TestRecipient__factory(signer);
    const testRecipient = await testRecipientFactory.deploy();

    const nonce = 0;

    // Note that hash of this message specifically matches leaf of 1st
    // proveAndProcess test case
    const abacusMessage = utils.formatMessage(
      remoteDomain,
      sender.address,
      nonce,
      localDomain,
      testRecipient.address,
      '0x',
    );

    // Assert above message and test case have matching leaves
    const { path, index } = proveAndProcessTestCases[0];
    const hash = utils.messageHash(abacusMessage);

    // Set inbox's current root to match newly computed root that includes
    // the new leaf (normally root will have already been computed and path
    // simply verifies leaf is in tree but because it is cryptographically
    // impossible to find the inputs that create a pre-determined root, we
    // simply recalculate root with the leaf using branchRoot)
    const proofRoot = await inbox.testBranchRoot(
      hash,
      path as types.BytesArray,
      index,
    );
    await inbox.setCheckpoint(proofRoot, 1);

    await inbox.proveAndProcess(abacusMessage, path as types.BytesArray, index);

    expect(await inbox.messages(hash)).to.equal(types.MessageStatus.PROCESSED);
  });

  it('Has proveAndProcess fail if prove fails', async () => {
    const [sender, recipient] = await ethers.getSigners();
    const nonce = 0;

    // Use 1st proof of 1st merkle vector test case
    const testCase = merkleTestCases[0];
    let { leaf, index, path } = testCase.proofs[0];

    // Create arbitrary message (contents not important)
    const abacusMessage = utils.formatMessage(
      remoteDomain,
      sender.address,
      nonce,
      localDomain,
      recipient.address,
      '0x',
    );

    // Ensure root given in proof and actual root don't match so that
    // inbox.prove(...) will fail
    const proofRoot = await inbox.testBranchRoot(
      leaf,
      path as types.BytesArray,
      index,
    );
    const rootIndex = await inbox.checkpoints(proofRoot);
    expect(rootIndex).to.equal(0);

    await expect(
      inbox.proveAndProcess(abacusMessage, path as types.BytesArray, index),
    ).to.be.revertedWith('!prove');
  });
});