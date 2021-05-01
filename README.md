# Certificater

Most of the steps are only reuired when runninig for the first time, please keep that in mind.

## Setting up the development environment 

Before we start we need some tools and dependencies. Please install the following:

1. Node.js and npm (comes with Node)
2. Git
3. Ganache-cli(Node module)

## Setting up Ganache
1. Install Ganache-cli: `npm install -g ganache-cli`  
2. Run ganache-cli: `ganache-cli -i 5777`

## Compiling and deploying the smart contract.
1. Install Truffle framework: `npm install -g truffle`  
2. Run truffle migration (process of deploying smart contract to the blockchian): `truffle migrate`


## Edit app.js
Provide Ethereum address from which transaction cost can be deducted, in `app.js (Line No.: 16, Veriable Name: accountAddress)`


## Installation
Install all other dependencies using following command: `npm install`

## Run Dapp
Execute the command: `npm start`



