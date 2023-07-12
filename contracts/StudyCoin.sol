pragma solidity ^0.8.2;

contract StudyCoin {
    mapping(address => uint256) balances;
    mapping(address => string) walletIds;
    mapping(address => string) emails;
    mapping(address => uint256) lastInteraction;
    address payable public wallet;

    event ReceiveStudyCoin(address indexed _from, uint256 _value);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event SuccessfulTransfer(address indexed _from, address indexed _to, uint256 _value);
    event FailedTransfer(address indexed _from, address indexed _to, uint256 _value);

    constructor(address payable _wallet) {
        wallet = _wallet;
    }

    modifier onlyOwner() {
        require(msg.sender == wallet, "Only the wallet address can call this function.");
        _;
    }

    receive() external payable {
        uint256 inBal = msg.value;
        uint256 timeAllotted = 25 minutes; // Set the allotted time for the pomodoro timer
        uint256 ethPerSecond = inBal / timeAllotted; // Calculate the rate of ETH per second

        // Calculate the amount of ETH to add based on the time spent in the app
        uint256 timeSpent = block.timestamp - lastInteraction[msg.sender];
        uint256 ethToAdd = timeSpent * ethPerSecond;

        balances[msg.sender] += ethToAdd;
        lastInteraction[msg.sender] = block.timestamp; // Update the last interaction time

        emit ReceiveStudyCoin(msg.sender, msg.value);
    }

    function transferCoin(address payable _to, uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient contract balance.");

        bool success = false;
        (success, ) = _to.call{value: _amount}("");
        if (success) {
            emit SuccessfulTransfer(address(this), _to, _amount);
        } else {
            emit FailedTransfer(address(this), _to, _amount);
            revert("Transfer failed.");
        }

        emit Transfer(address(this), _to, _amount);
    }

    function addToBalance(address _account, uint256 _amount) external onlyOwner {
        balances[_account] += _amount;
    }

    function getBalance(address _account) external view returns (uint256) {
        return balances[_account];
    }

    function getWalletId(address _account) external view returns (string memory) {
        return walletIds[_account];
    }

    function getEmail(address _account) external view returns (string memory) {
        return emails[_account];
    }

    function setUser(address _account, string memory _walletId, string memory _email) external onlyOwner {
        walletIds[_account] = _walletId;
        emails[_account] = _email;
    }
}
