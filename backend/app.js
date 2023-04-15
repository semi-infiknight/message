const express = require('express');
const Web3 = require('web3');
const contract = require('@truffle/contract');
const MessageStorageJSON = require('./build/contracts/MessageStorage.json');

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));

const MessageStorage = contract(MessageStorageJSON);
MessageStorage.setProvider(web3.currentProvider);

app.use(express.json());

app.post('/message', async (req, res) => {
   const message = req.body.message;
   const accounts = await web3.eth.getAccounts();
   const messageStorage = await MessageStorage.deployed();
   await messageStorage.setMessage(web3.utils.keccak256(message), { from: accounts[0] });
   res.send('Message stored successfully');
});

app.get('/message', async (req, res) => {
   const accounts = await web3.eth.getAccounts();
   const messageStorage = await MessageStorage.deployed();
   const message = await messageStorage.getMessage.call({ from: accounts[0] });
   res.send(web3.utils.hexToAscii(message));
});

app.listen(3000, () => {
   console.log('API server listening on port 3000');
});
