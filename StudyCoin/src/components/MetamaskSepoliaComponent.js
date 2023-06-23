import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const MetamaskSepoliaComponent = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    // Check if Metamask is installed
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log('Metamask is not installed');
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Request user permission to connect to Metamask
      await window.ethereum.enable();

      // Get the selected wallet address
      const accounts = await web3.eth.getAccounts();
      setWalletAddress(accounts[0]);

      // Get the wallet balance
      const balance = await web3.eth.getBalance(accounts[0]);
      setWalletBalance(web3.utils.fromWei(balance, 'ether'));
    } catch (error) {
      console.log('Error connecting to Metamask:', error);
    }
  };

  const sendTransaction = async () => {
    // Implement logic to send a transaction using the web3 instance
  };

  return (
    <div>
      <h2>Metamask & Sepolia Wallet</h2>
      {web3 ? (
        <>
          <p>Wallet Address: {walletAddress}</p>
          <p>Wallet Balance: {walletBalance} ETH</p>
          <button onClick={connectWallet}>Connect Wallet</button>
          <button onClick={sendTransaction}>Send Transaction</button>
        </>
      ) : (
        <p>Please install Metamask to use the Sepolia wallet.</p>
      )}
    </div>
  );
};

export default MetamaskSepoliaComponent;