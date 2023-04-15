# message
##Ethereum Message Storage
##This project is a simple Ethereum smart contract and backend API for storing and retrieving encrypted messages using the keccak256 algorithm.

Prerequisites
Before you can run this project, you will need:
Node.js (v10 or higher)
Truffle (v5 or higher)
An Ethereum client, such as Ganache or Geth
Installation
Clone this repository to your local machine.

sh
Copy code
git clone https://github.com/your-username/ethereum-message-storage.git
Install the required Node.js packages.

sh
Copy code
cd ethereum-message-storage
npm install
Compile and migrate the smart contract.

sh
Copy code
truffle compile
truffle migrate
Take note of the contract address that is printed to the console after the migration is complete. You will need this address to interact with the smart contract from the backend API.

Start the backend API server.

sh
Copy code
export CONTRACT_ADDRESS=<your_contract_address>
npm start
Replace <your_contract_address> with the contract address you obtained in step 3. The server should now be listening on port 3000.

Usage
To store a message, send a POST request to http://localhost:3000/message with a JSON payload containing a message property.

json
Copy code
{
  "message": "Hello, World!"
}
To retrieve the message, send a GET request to http://localhost:3000/message. The response will be a string representing the decrypted message.

Deployment
To deploy the backend API to a hosting service of your choice, such as Vercel, Heroku, Netlify, or Cyclic, follow the deployment instructions for your chosen service. Be sure to set the CONTRACT_ADDRESS environment variable on the hosting service as well.

License
This project is licensed under the MIT License. See the LICENSE file for details.
