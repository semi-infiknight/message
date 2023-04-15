pragma solidity ^0.8.19;

contract MessageStorage {
    mapping(address => bytes32) private messages;

    function setMessage(bytes32 message) public {
        messages[msg.sender] = message;
    }

    function getMessage() public view returns (bytes32) {
        return messages[msg.sender];
    }
}
