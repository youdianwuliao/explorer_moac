
# MOACExplorer 

<b>Live Version: [moac.io](http://moac.io)</b>

Follow the project progress at: [Moac Explorer Development]()

## Local installation

Clone the repo

`git clone https://github.com/gheros/explorer`

Download [Nodejs and npm](https://docs.npmjs.com/getting-started/installing-node "Nodejs install") if you don't have them

Install dependencies:

`npm install`

Install mongodb:

MacOS: `brew install mongodb`

Ubuntu: `sudo apt-get install -y mongodb-org`

## Populate the DB

This will fetch and parse the entire blockchain.

create the config

vim config.json

Configuration file: `config.json`

Basic settings:
```json
{
    "mongoHost": "localhost",
    "mongouname":"",
    "mongopasswd":"",
    "gethHost": "localhost",
    "gethPort": 8545,
    "blocks": [ {"start": 0, "end": "latest"}],
    "skipTransactions": false,
    "quiet": false,
    "terminateAtExistingDB": false,
    "listenOnly": true,
    "dbname":"blockDB"
}

```

```blocks``` is a list of blocks to grab. It can be specified as a list of block numbers or an interval of block numbers. When specified as an interval, it will start at the ```end``` block and keep recording decreasing block numbers.

```terminateAtExistingDB``` will terminate the block grabber once it gets to a block it has already stored in the DB.

```quiet``` prints out the log of what it is doing.

```listenOnly``` When true, the grabber will create a filter to receive the latest blocks from geth as they arrive. It will <b>not</b> continue to populate older block numbers.

<b>Note: When ```listenOnly``` is set to ```true```, the ```blocks``` option is ignored. </b>

<b>Note 2: ```terminateAtExistingDB``` and ```listenOnly``` are mutually exclusive. Do not use ```terminateAtExistingDB``` when in ```listenOnly``` mode.</b>
