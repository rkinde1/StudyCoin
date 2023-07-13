const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');

// Connect to a local Ethereum node
const web3 = new Web3('http://localhost:8545');

// Set the account address and private key of the deployer
const deployerAddress = 'Enter Address';
const deployerPrivateKey = 'Enter PrivateKey';

// Read the contract source code
const contractSourceCode = fs.readFileSync('StudyCoin.sol', 'utf8');

// Compile the contract
const compiledContract = solc.compile(contractSourceCode, 1).contracts[':StudyCoin'];
const contractBytecode = compiledContract.bytecode;
const contractAbi = JSON.parse(compiledContract.interface);

// Create a new contract instance
const StudyCoinContract = new web3.eth.Contract(contractAbi);

// Deploy the contract
async function deployContract() {
  const gasPrice = await web3.eth.getGasPrice();
  const gasEstimate = await StudyCoinContract.deploy({ data: '0x' + contractBytecode }).estimateGas();

  const deployTransaction = StudyCoinContract.deploy({ data: '0x' + contractBytecode }).send({
    from: deployerAddress,
    gas: gasEstimate,
    gasPrice: gasPrice,
  });

  deployTransaction
    .on('transactionHash', (hash) => {
      console.log(`Transaction hash: ${hash}`);
      console.log('Waiting for the contract deployment...');
    })
    .on('receipt', (receipt) => {
      console.log(`Contract deployed at address: ${receipt.contractAddress}`);
      console.log('Contract deployed successfully!');
    })
    .on('error', (error) => {
      console.error('Failed to deploy the contract:', error);
    });
}

// Set the deployed contract address for future interactions
async function setContractAddress() {
  const deployedContracts = await StudyCoinContract.getPastEvents('allEvents', {
    fromBlock: 0,
    toBlock: 'latest',
  });

  const lastContractEvent = deployedContracts[deployedContracts.length - 1];
  const contractAddress = lastContractEvent.address;

  StudyCoinContract.options.address = contractAddress;

  console.log(`Contract address set to: ${contractAddress}`);
}

// Deploy the contract and set the contract address
async function deploy() {
  try {
    await deployContract();
    await setContractAddress();
  } catch (error) {
    console.error('Deployment error:', error);
  }
}

// Execute the deployment function
deploy();

