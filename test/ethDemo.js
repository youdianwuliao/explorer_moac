var BigNumber = require('bignumber.js');

var Chain3 = require('chain3');

const abiDecoder = require('abi-decoder'); // NodeJS

// set the default NODE address to localhost if it's not provided

var config = {};



// set the default geth port if it's not provided

var chain3 = new Chain3(new Chain3.providers.HttpProvider('http://' + "10.1.1.99" + ':' + "8106"));
//是否链接
console.log("链接: "+chain3.isConnected());

//版本号
console.log("版本号: "+chain3.version.api);


var coinbase = chain3.mc.coinbase;
console.log("coinbase: "+coinbase);


var mining = chain3.mc.mining;
console.log("挖矿： "+mining);





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
var contract = chain3.mc.contract(daoABI).at("0x77b39f90b8ace1eb7835946a7dedbffd92e742c9");
console.log("合约名称："+contract.name()+" "+contract.symbol()+" "+contract.decimals()+" "+contract.totalSupply() );

// console.log("合约余额 "+contract.balanceOf("0xceb87264de34d2e472efdb77bd3a99bab542424b"));
// console.log("合约余额 "+contract.balanceOf("0xcebea457d89d78d679e88dd8745e8ebf92388482"));
// console.log("合约余额 "+contract.balanceOf("0x31d75b08c52678438c35dd4d19657f651d580ef3"));



// chain3.mc.toASCII("0xa9059cbb000000000000000000000000aa7a137d17bd5692abe22c2928d780aa948edd5b000000000000000000000000000000000000000000000000000005b312619764")

var queryBlockNumber = 458114;
abiDecoder.addABI(daoABI);
chain3.mc.getBlock(queryBlockNumber, true, function(error,blockData) {
    if(null == error){
        console.log("开始解析block");
    }
    for (txi in blockData.transactions){
        tx = blockData.transactions[txi];
        // console.log("交易hash：from: "+tx.from+" to: "+tx.to+" value:"+tx.value+"  input: "+tx.input);

        var code  = chain3.mc.getCode(tx.to);
        if(code == "0x"){
            var receipt = chain3.mc.getTransactionReceipt(tx.hash);
            console.log(" 普通交易 "+tx.from+" to: "+tx.to+" value:"+tx.value+" 票据是否为空： "+ (receipt.logs.length==0));

        }else {
            var decodeObj = abiDecoder.decodeMethod(tx.input);
            if (typeof(decodeObj) != "undefined") {
                var params = decodeObj.params;
                if(params[0].name == "_to" ){
                    console.log(" 合约交易 合约地址:"+tx.to+" from:"+tx.from+"   toAddress: " + params[0].value+" value:"+ params[1].value);
                }


                // console.log("input内容: " + decodeObj.params());
            }
        }
    }

})

















