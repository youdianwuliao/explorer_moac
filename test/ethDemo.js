var BigNumber = require('bignumber.js');

var Web3 = require('web3');

const abiDecoder = require('abi-decoder'); // NodeJS

// set the default NODE address to localhost if it's not provided

var config = {};



// set the default geth port if it's not provided

var web3 = new Web3(new Web3.providers.HttpProvider('http://' + "10.1.1.99" + ':' + "8206"));
//是否链接
console.log("链接: "+web3.isConnected());

//版本号
console.log("版本号: "+web3.version.api);


var coinbase = web3.eth.coinbase;
console.log("coinbase: "+coinbase);


var mining = web3.eth.mining;
console.log("挖矿： "+mining);



//
//
var daoABI =
    [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        }
];
var contract = web3.eth.contract(daoABI).at("0xb8c77482e45f1f44de1745f52c74426c631bdd52");
console.log("合约名称："+contract.name()+" "+contract.symbol()+" "+contract.decimals()+" "+contract.totalSupply() );

// console.log("合约余额 "+contract.balanceOf("0xceb87264de34d2e472efdb77bd3a99bab542424b"));
// console.log("合约余额 "+contract.balanceOf("0xcebea457d89d78d679e88dd8745e8ebf92388482"));
// console.log("合约余额 "+contract.balanceOf("0x31d75b08c52678438c35dd4d19657f651d580ef3"));


//
// web3.eth.toASCII("0xa9059cbb000000000000000000000000aa7a137d17bd5692abe22c2928d780aa948edd5b000000000000000000000000000000000000000000000000000005b312619764")

// var queryBlockNumber = 6190953 ;
// abiDecoder.addABI(daoABI);
// // 交易记录
// web3.eth.getBlock(queryBlockNumber, true, function(error,blockData) {
//     if(null == error){
//         console.log("开始解析block");
//     }
//     for (txi in blockData.transactions){
//         tx = blockData.transactions[txi];
//         if(null == tx.to){
//             continue;
//         }
//         var code  = web3.eth.getCode(tx.to);
//         if(code == "0x"){
//             var receipt = web3.eth.getTransactionReceipt(tx.hash);
//             console.log(txi+" "+receipt.logs.length+" logs tx hash: "+tx.hash+" 普通交易 "+tx.from+" to: "+tx.to+" value:"+tx.value+" 票据是否为空： "+ (receipt.logs.length==0));
//
//
//         }else {
//             var decodeObj = abiDecoder.decodeMethod(tx.input);
//             if (typeof(decodeObj) != "undefined") {
//                 var params = decodeObj.params;
//                 if(params[0].name == "_to" ){
//                     console.log(txi+" logs tx hash: "+tx.hash+" 合约交易 合约地址:"+tx.to+" from:"+tx.from+"   toAddress: " + params[0].value+" value:"+ params[1].value);
//                 }else {
//                     console.log(txi);
//                 }
//             }
//         }
//     }
//
// })


var transaction = web3.eth.getTransaction("0x783204435fd7ac6ed5158425730bcfd0cc0ae6ec2eee666ba8a8187a8688e13b");

console.log("ceshi:"+transaction.from+" "+transaction.to+"  " +web3.eth.getCode(transaction.to));
var contract = web3.eth.contract(daoABI).at(transaction.to);
console.log("合约名称："+contract.name()+" "+contract.symbol()+" "+contract.decimals()+" "+contract.totalSupply() );

// 交易hash
// web3.eth.getBlock(queryBlockNumber, false, function(error,blockData) {
//     if(null == error){
//         console.log("开始解析block");
//     }
//     for (txHash in blockData.transactions){
//         var transaction = web3.eth.getTransaction(blockData.transactions[txHash]);
//         console.log("txHash: "+txHash+" "+blockData.transactions[txHash]+"  "+transaction.to);
//     }
//
// })
//
//
//














