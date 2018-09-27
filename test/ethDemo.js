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

var commonABI = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "value",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_value",
        "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "addresses",
        "type": "address[]"
    }],
    "name": "disableWhitelist",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "addresses",
        "type": "address[]"
    }],
    "name": "airdrop",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "finishDistribution",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "addresses",
        "type": "address[]"
    }],
    "name": "enableWhitelist",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "addresses",
        "type": "address[]"
    }, {
        "name": "amounts",
        "type": "uint256[]"
    }],
    "name": "distributeAmounts",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "getTokens",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "distributionFinished",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "tokenAddress",
        "type": "address"
    }, {
        "name": "who",
        "type": "address"
    }],
    "name": "getTokenBalance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalRemaining",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_tokenContract",
        "type": "address"
    }],
    "name": "withdrawForeignTokens",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalDistributed",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "addresses",
        "type": "address[]"
    }, {
        "name": "amount",
        "type": "uint256"
    }],
    "name": "distribution",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "blacklist",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Distr",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "DistrFinished",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "burner",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "Burn",
    "type": "event"
}];


var contract = web3.eth.contract(daoABI).at("0xb8c77482e45f1f44de1745f52c74426c631bdd52");
// console.log("合约名称："+contract.name()+" "+contract.symbol()+" "+contract.decimals()+" "+contract.totalSupply() );



//
// web3.eth.toASCII("0xa9059cbb000000000000000000000000aa7a137d17bd5692abe22c2928d780aa948edd5b000000000000000000000000000000000000000000000000000005b312619764")

var queryBlockNumber = 6190953 ;
abiDecoder.addABI(daoABI);
// 交易记录
web3.eth.getBlock(queryBlockNumber, true, function(error,blockData) {
    if(null == error){
        console.log("开始解析block");
    }
    for (txi in blockData.transactions){
        tx = blockData.transactions[txi];
        if(null == tx.to){
            console.log(txi+" "+tx.hash+" 创建合约");

            continue;
        }
        var code  = web3.eth.getCode(tx.to);
        if(code == "0x"){
            var receipt = web3.eth.getTransactionReceipt(tx.hash);
            // receipt.status()
            console.log(txi+" 是否成功:"+(receipt.status=="0x1")+" logs tx hash: "+tx.hash+" 普通交易 "+tx.from+" to: "+tx.to+" value:"+tx.value+" 票据是否为空： "+ (receipt.logs.length==0));


        }else {
            contract = web3.eth.contract(daoABI).at(tx.to);

            try{
                console.log(txi+"   智能合约交易："+tx.hash+" "+contract.name()+" "+contract.symbol()+" "+contract.symbol()+" "+contract.totalSupply() );
            }catch (e) {
                console.log(txi+" 非erc20交易 "+e);
            }




            // var decodeObj = abiDecoder.decodeMethod(tx.input);
            // if (typeof(decodeObj) != "undefined") {
            //     var params = decodeObj.params;
            //     if(params[0].name == "_to" ){
            //         console.log(txi+" logs tx hash: "+tx.hash+" 合约交易 合约地址:"+tx.to+" from:"+tx.from+"   toAddress: " + params[0].value+" value:"+ params[1].value);
            //     }else {
            //         console.log(txi);
            //     }
            // }
        }
    }

})

//合约交易
// var transaction = web3.eth.getTransaction("0x42bf70824f4fd9d7a8fba9ed4886ce348fdbf6515f79f5b70eed57a9d10eb788");
// console.log(transaction.from);
// var code  = web3.eth.getCode(transaction.to);
// if(code == "0x"){
//     console.log("普通合约");
// }else{
//     abiDecoder.addABI(daoABI);
//     // contract = web3.eth.contract(daoABI).at(transaction.input);
//     contract = web3.eth.contract(daoABI).at(transaction.to);
//
//     console.log("智能合约:"+contract.name()+" "+contract.symbol());
// }

// 失败的交易:0x42bf70824f4fd9d7a8fba9ed4886ce348fdbf6515f79f5b70eed57a9d10eb788  成功交易: 0xea32c5c3646c67641ff89169be7a3ab55a101bbf7040c7349ec59de9010824d8
//创建合约
// var transaction = web3.eth.getTransaction("0x61b7ca90e6ca5083af1035fc262159d855c54036a51782e50b7fc414589c0044");
// console.log("ceshi:"+transaction.from+" "+transaction.to+"  " );
// var contract = web3.eth.contract(daoABI).at(transaction.input);
// console.log("合约名称："+contract.name()+" "+contract.symbol()+" "+contract.decimals()+" "+contract.totalSupply() );

//合约交易
// console.log("ceshi:"+transaction.from+" "+transaction.to+"  " +web3.eth.getCode(transaction.to));
// var contract = web3.eth.contract(daoABI).at(transaction.to);
// console.log("合约名称："+contract.name()+" "+contract.symbol()+" "+contract.decimals()+" "+contract.totalSupply() );

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














