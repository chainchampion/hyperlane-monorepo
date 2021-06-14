/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestGovernanceRouter,
  TestGovernanceRouterInterface,
} from "../TestGovernanceRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previousRouter",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRouter",
        type: "bytes32",
      },
    ],
    name: "SetRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousGovernorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGovernorDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "TransferGovernor",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "containsDomain",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [
      {
        internalType: "bytes",
        name: "_ret",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "routers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "setRouterAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterDuringSetup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "testSetRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620032b3380380620032b383398101604081905262000034916200004a565b60e01b6001600160e01b03191660805262000077565b6000602082840312156200005c578081fd5b815163ffffffff8116811462000070578182fd5b9392505050565b60805160e01c61320f620000a4600039806109865280610aa45280610ad5528061173d525061320f6000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806356f7e298116100b25780638d3638f411610081578063c4d66de811610066578063c4d66de81461024a578063db2021ae1461025d578063e8c6f83a146102705761011b565b80638d3638f41461022f578063c3ef2134146102375761011b565b806356f7e298146101d657806366cf8fab146101f657806368b967dc146102095780637d8dfc331461021c5761011b565b80634626abee116100ee5780634626abee1461017b5780634fedbbb51461018e5780635585416c146101a157806356d5d475146101b65761011b565b80630c340a24146101205780632ead72f61461013e5780633339df961461015e57806341bdc8b514610166575b600080fd5b610128610283565b6040516101359190612d83565b60405180910390f35b61015161014c366004612b0e565b61029f565b6040516101359190612daf565b6101286102b1565b610179610174366004612a5e565b6102d3565b005b610179610189366004612a7a565b61037a565b61017961019c366004612b7e565b610413565b6101a961059c565b6040516101359190612f58565b6101c96101c4366004612bfc565b6105c2565b6040516101359190612dc6565b6101e96101e4366004612b0e565b610861565b6040516101359190612da4565b6101a9610204366004612af6565b6108ca565b610179610217366004612bd1565b610904565b61017961022a366004612bd1565b610925565b6101a9610984565b610179610245366004612b46565b6109a8565b610179610258366004612a5e565b6109ba565b61017961026b366004612b46565b610c0b565b61017961027e366004612bd1565b610ca5565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205481565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16331461032d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612f21565b60405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612f21565b60005b8181101561040e576104058383838181106103e557fe5b90506020028101906103f79190612fa5565b6104009061305c565b610cf6565b506001016103ce565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610464576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612f21565b600061046f84610db9565b905060006104856104808486612ffc565b610e06565b9050600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104ef57600080fd5b505afa158015610503573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105279190612ada565b73ffffffffffffffffffffffffffffffffffffffff1663d34686398684846040518463ffffffff1660e01b815260040161056393929190612f69565b600060405180830381600087803b15801561057d57600080fd5b505af1158015610591573d6000803e3d6000fd5b505050505050505050565b600054760100000000000000000000000000000000000000000000900463ffffffff1681565b6000546040517f5190bc5300000000000000000000000000000000000000000000000000000000815260609162010000900473ffffffffffffffffffffffffffffffffffffffff1690635190bc539061061f903390600401612d83565b60206040518083038186803b15801561063757600080fd5b505afa15801561064b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066f9190612aba565b6106a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612e45565b83836106b18282610fdb565b6106e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612dd9565b60006106f3858261102d565b90506107207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611051565b15610760576107586107537fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166110ac565b6110fa565b935050610858565b61078b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166111a7565b156107c3576107586107be7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611205565b61121f565b6107ee7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166112c6565b15610826576107586108217fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166112cf565b6112e9565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612eea565b50509392505050565b6000805b6003548110156108bf578263ffffffff166003828154811061088357fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614156108b75760019150506108c5565b600101610865565b50600090505b919050565b600381815481106108da57600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b61090e828261135c565b600061091a83836113ed565b905061040e8161141a565b60015473ffffffffffffffffffffffffffffffffffffffff163314610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612f21565b610980828261135c565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610980826109b583611611565b61135c565b600054610100900460ff16806109d357506109d361162a565b806109e1575060005460ff16155b610a36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806130ea602e913960400191505060405180910390fd5b600054610100900460ff16158015610a9c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b336001610aca7f0000000000000000000000000000000000000000000000000000000000000000838361163b565b610ad3846102d3565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b815260040160206040518083038186803b158015610b6257600080fd5b505afa158015610b76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9a9190612b2a565b63ffffffff1614610bd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612e10565b5050801561098057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610c5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612f21565b6000610c678361173b565b9050610c7483838361163b565b8015610c805750610980565b6000610c9484610c8f85611611565b61176a565b9050610c9f8161141a565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610904576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612f21565b60606000610d078360000151611792565b905060008173ffffffffffffffffffffffffffffffffffffffff168460200151604051610d349190612cdb565b6000604051808303816000865af19150503d8060008114610d71576040519150601f19603f3d011682016040523d82523d6000602084013e610d76565b606091505b509350905080610db2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612e7c565b5050919050565b63ffffffff8116600090815260026020526040902054806108c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032490612eb3565b805160609060006002820167ffffffffffffffff81118015610e2757600080fd5b50604051908082528060200260200182016040528015610e51578160200160208202803683370190505b509050610e9f60006001604051602001610e6b9190612cf7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529061102d565b81600081518110610eac57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101820152604051610ef291600091610e6b91869101612d53565b81600181518110610eff57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091019091015260005b82811015610fc9576000858281518110610f4957fe5b602002602001015190506000610f7c600083600001518460200151518560200151604051602001610e6b93929190612cae565b905080846002850181518110610f8e57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101909101525050600101610f33565b50610fd381611795565b949350505050565b6000805463ffffffff84811676010000000000000000000000000000000000000000000090920416148015611024575063ffffffff831660009081526002602052604090205482145b90505b92915050565b81516000906020840161104864ffffffffff851682846117e5565b95945050505050565b6000600161105e83611846565b60ff16148015611027575060406110967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611876565b6bffffffffffffffffffffffff16101592915050565b60006110b782611051565b156110f2576110eb60015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000084169061188a565b90506108c5565b6110276118b0565b606081600161112d815b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416906118d4565b50600061115b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611a54565b905060005b815181101561118e5761118582828151811061117857fe5b6020026020010151610cf6565b50600101611160565b5050604080516020810190915260008152949350505050565b600060025b60ff166111b883611846565b60ff16148015611027575060256111f07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611876565b6bffffffffffffffffffffffff161492915050565b6000611210826111a7565b156110f2576110eb60026110c2565b606081600261122d81611104565b50600061125b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611bf7565b9050600061129261128d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611c28565b611792565b9050600061129f8361173b565b90506112ac83838361163b565b505060408051602081019091526000815295945050505050565b600060036111ac565b60006112da826112c6565b156110f2576110eb60036110c2565b60608160036112f781611104565b5060006113257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611bf7565b905060006113547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611c28565b905061118e82825b63ffffffff8216600081815260026020526040908190205490519091907fe1cc453e5e6d48a5e3dd7dc6c72117211d2bea20fbb91fd980ebc3e7f73fe546906113a89084908690612db8565b60405180910390a2816113c4576113be83611c59565b50610980565b806113d2576113d283611d00565b5063ffffffff91909116600090815260026020526040902055565b6060611024611415611410600060038787604051602001610e6b93929190612d0c565b611d60565b611d95565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561148357600080fd5b505afa158015611497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bb9190612ada565b905060005b60035481101561040e57600063ffffffff16600382815481106114df57fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614611609578173ffffffffffffffffffffffffffffffffffffffff1663d34686396003838154811061153157fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16600260006003868154811061156857fe5b6000918252602080832060088304015463ffffffff6004600790941684026101000a909104168452830193909352604091820190205490517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526115d69392899101612f69565b600060405180830381600087803b1580156115f057600080fd5b505af1158015611604573d6000803e3d6000fd5b505050505b6001016114c0565b73ffffffffffffffffffffffffffffffffffffffff1690565b600061163530611dd9565b15905090565b8061164b5761164983610db9565b505b60008161165957600061165b565b825b600080547fffffffffffff00000000ffffffffffffffffffffffffffffffffffffffffffff1676010000000000000000000000000000000000000000000063ffffffff88811682029290921792839055600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8681169182179283905560405196975090959116937f4daaa39e87dee84708195369c30e97baa0665dc8562ac10535a0f3a9329943aa9361172d9390910416908990612f8e565b60405180910390a350505050565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811691161490565b606061102461141561178d600060028787604051602001610e6b93929190612d0c565b611ddf565b90565b60405160609060006117aa8460208401611ded565b905060006117b782611876565b6bffffffffffffffffffffffff16905060006117d283611e65565b9184525082016020016040525092915050565b6000806117f28484611e79565b9050604051811115611802575060005b80611830577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061183f565b61183b858585611eeb565b9150505b9392505050565b60006110277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826001611efe565b60181c6bffffffffffffffffffffffff1690565b60d81b7affffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000090565b60006118e08383611f1f565b611a4d5760006118fe6118f285611f41565b64ffffffffff16611f47565b91505060006119138464ffffffffff16611f47565b604080517f5479706520617373657274696f6e206661696c65642e20476f742030780000006020808301919091527fffffffffffffffffffff0000000000000000000000000000000000000000000060b088811b8216603d8501527f2e20457870656374656420307800000000000000000000000000000000000000604785015285901b1660548301528251603e818403018152605e8301938490527f08c379a000000000000000000000000000000000000000000000000000000000909352606282018181528351608284015283519496509294508493839260a2019185019080838360005b83811015611a125781810151838201526020016119fa565b50505050905090810190601f168015611a3f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090919050565b60606000611a867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416600180611efe565b90506000611af7600280611abb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611876565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000881692919061201b565b905060008260ff1667ffffffffffffffff81118015611b1557600080fd5b50604051908082528060200260200182016040528015611b4f57816020015b611b3c612912565b815260200190600190039081611b345790505b50905060005b6000611b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611876565b6bffffffffffffffffffffffff161115611bee57611b9f836120ab565b828281518110611bab57fe5b602090810291909101015152611bc0836120db565b828281518110611bcc57fe5b602002602001015160200181905250611be48361211a565b9250600101611b55565b50949350505050565b60006110277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660016004611efe565b60006110277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600560206121a5565b63ffffffff811660009081526002602052604081208190555b600354811015610980578163ffffffff1660038281548110611c9057fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff161415611cf55760038181548110611cc757fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff021916905550611cfd565b600101611c72565b50565b600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6008820401805460079092166004026101000a63ffffffff818102199093169390921691909102919091179055565b6000611027611d6e836112cf565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016612313565b6060600080611da384611876565b6bffffffffffffffffffffffff1690506040519150819250611dc8848360200161238d565b508181016020016040529052919050565b3b151590565b6000611027611d6e83611205565b600060405182811115611e005760206060fd5b506000805b8451811015611e58576000858281518110611e1c57fe5b60200260200101519050611e328184870161238d565b50611e3c81611876565b6bffffffffffffffffffffffff16929092019150600101611e05565b50610fd360008483611eeb565b6000611e70826124b9565b60200292915050565b8181018281101561102757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60008160200360080260ff16611f158585856121a5565b901c949350505050565b60008164ffffffffff16611f3284611f41565b64ffffffffff16149392505050565b60d81c90565b600080601f5b600f8160ff161115611faf5760ff600882021684901c611f6c816124ed565b61ffff16841793508160ff16601014611f8757601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611f4d565b50600f5b60ff8160ff1610156120155760ff600882021684901c611fd2816124ed565b61ffff16831792508160ff16600014611fed57601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611fb3565b50915091565b6000806120278661251d565b6bffffffffffffffffffffffff16905061204086612531565b6120548561204e8489611e79565b90611e79565b1115612083577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610fd3565b61208d8186611e79565b90506120a18364ffffffffff1682866117e5565b9695505050505050565b60006110277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083168260206121a5565b606061102761141560406120ee8561255b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000086169190600461201b565b600081600161212881611104565b5060006121348561255b565b604001905061104881806121697fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611876565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000891692919061201b565b600060ff82166121b75750600061183f565b6121c084611876565b6bffffffffffffffffffffffff166121db8460ff8516611e79565b111561227d5761221c6121ed8561251d565b6bffffffffffffffffffffffff1661220486611876565b6bffffffffffffffffffffffff16858560ff1661258b565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201818152835160248401528351909283926044909101919085019080838360008315611a125781810151838201526020016119fa565b60208260ff1611156122da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180613118603a913960400191505060405180910390fd5b6008820260006122e98661251d565b6bffffffffffffffffffffffff1690506000612304836126e6565b91909501511695945050505050565b600061231e8261272f565b61238957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015290519081900360640190fd5b5090565b60006123988361276c565b6123ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806131526028913960400191505060405180910390fd5b6123f68361272f565b61244b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061317a602b913960400191505060405180910390fd5b600061245684611876565b6bffffffffffffffffffffffff16905060006124718561251d565b6bffffffffffffffffffffffff16905060006040519050848111156124965760206060fd5b8285848460045afa506120a16124ab87611f41565b64ffffffffff168685611eeb565b600060206124df60206124cb85611876565b6bffffffffffffffffffffffff1690611e79565b816124e657fe5b0492915050565b60006124ff60048360ff16901c61277e565b60ff161760081b62ffff00166125148261277e565b60ff1617919050565b60781c6bffffffffffffffffffffffff1690565b600061253c82611876565b6125458361251d565b016bffffffffffffffffffffffff169050919050565b60006110277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166020806121a5565b6060600061259886611f47565b91505060006125a686611f47565b91505060006125b486611f47565b91505060006125c286611f47565b9150508383838360405160200180806131a5603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a82015260500160216130c982397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600061273a82611f41565b64ffffffffff1664ffffffffff1415612755575060006108c5565b600061276083612531565b60405110199392505050565b6000612777826128ea565b1592915050565b600060f08083179060ff8216141561279a5760309150506108c5565b8060ff1660f114156127b05760319150506108c5565b8060ff1660f214156127c65760329150506108c5565b8060ff1660f314156127dc5760339150506108c5565b8060ff1660f414156127f25760349150506108c5565b8060ff1660f514156128085760359150506108c5565b8060ff1660f6141561281e5760369150506108c5565b8060ff1660f714156128345760379150506108c5565b8060ff1660f8141561284a5760389150506108c5565b8060ff1660f914156128605760399150506108c5565b8060ff1660fa14156128765760619150506108c5565b8060ff1660fb141561288c5760629150506108c5565b8060ff1660fc14156128a25760639150506108c5565b8060ff1660fd14156128b85760649150506108c5565b8060ff1660fe14156128ce5760659150506108c5565b8060ff1660ff14156128e45760669150506108c5565b50919050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b60408051808201909152600081526060602082015290565b60008083601f84011261293b578182fd5b50813567ffffffffffffffff811115612952578182fd5b602083019150836020808302850101111561296c57600080fd5b9250929050565b600082601f830112612983578081fd5b813567ffffffffffffffff81111561299757fe5b6129c860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612fd8565b8181528460208386010111156129dc578283fd5b816020850160208301379081016020019190915292915050565b600060408284031215612a07578081fd5b6040516040810167ffffffffffffffff8282108183111715612a2557fe5b81604052829350843583526020850135915080821115612a4457600080fd5b50612a5185828601612973565b6020830152505092915050565b600060208284031215612a6f578081fd5b813561183f81613094565b60008060208385031215612a8c578081fd5b823567ffffffffffffffff811115612aa2578182fd5b612aae8582860161292a565b90969095509350505050565b600060208284031215612acb578081fd5b8151801515811461183f578182fd5b600060208284031215612aeb578081fd5b815161183f81613094565b600060208284031215612b07578081fd5b5035919050565b600060208284031215612b1f578081fd5b813561183f816130b6565b600060208284031215612b3b578081fd5b815161183f816130b6565b60008060408385031215612b58578182fd5b8235612b63816130b6565b91506020830135612b7381613094565b809150509250929050565b600080600060408486031215612b92578081fd5b8335612b9d816130b6565b9250602084013567ffffffffffffffff811115612bb8578182fd5b612bc48682870161292a565b9497909650939450505050565b60008060408385031215612be3578182fd5b8235612bee816130b6565b946020939093013593505050565b600080600060608486031215612c10578283fd5b8335612c1b816130b6565b925060208401359150604084013567ffffffffffffffff811115612c3d578182fd5b612c4986828701612973565b9150509250925092565b60008151808452612c6b816020860160208601613068565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60058110612ca757fe5b60f81b9052565b60008482528360208301528251612ccc816040850160208701613068565b91909101604001949350505050565b60008251612ced818460208701613068565b9190910192915050565b6000612d038284612c9d565b50600101919050565b6000612d188286612c9d565b5060e09290921b7fffffffff000000000000000000000000000000000000000000000000000000001660018301526005820152602501919050565b60f89190911b7fff0000000000000000000000000000000000000000000000000000000000000016815260010190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b918252602082015260400190565b6000602082526110246020830184612c53565b6020808252600f908201527f21676f7665726e6f72526f757465720000000000000000000000000000000000604082015260600190565b6020808252818101527f58417070436f6e6e656374696f6e4d616e616765722062616420646f6d61696e604082015260600190565b60208082526008908201527f217265706c696361000000000000000000000000000000000000000000000000604082015260600190565b6020808252600b908201527f63616c6c206661696c6564000000000000000000000000000000000000000000604082015260600190565b60208082526007908201527f21726f7574657200000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f2176616c6964206d657373616765207479706500000000000000000000000000604082015260600190565b6020808252601a908201527f43616c6c6572206973206e6f742074686520676f7665726e6f72000000000000604082015260600190565b63ffffffff91909116815260200190565b600063ffffffff85168252836020830152606060408301526110486060830184612c53565b63ffffffff92831681529116602082015260400190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112612ced578182fd5b60405181810167ffffffffffffffff81118282101715612ff457fe5b604052919050565b600067ffffffffffffffff83111561301057fe5b602061301f8182860201612fd8565b8481528181019084845b878110156130505761303e36833589016129f6565b84529284019290840190600101613029565b50909695505050505050565b600061102736836129f6565b60005b8381101561308357818101518382015260200161306b565b83811115610c9f5750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611cfd57600080fd5b63ffffffff81168114611cfd57600080fdfe2e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220cf720abee1edfeb33e76e55524cbb2ed56ba595581db8ba52dff1728531abbc464736f6c63430007060033";

export class TestGovernanceRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestGovernanceRouter> {
    return super.deploy(
      _localDomain,
      overrides || {}
    ) as Promise<TestGovernanceRouter>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): TestGovernanceRouter {
    return super.attach(address) as TestGovernanceRouter;
  }
  connect(signer: Signer): TestGovernanceRouter__factory {
    return super.connect(signer) as TestGovernanceRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestGovernanceRouterInterface {
    return new utils.Interface(_abi) as TestGovernanceRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestGovernanceRouter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestGovernanceRouter;
  }
}