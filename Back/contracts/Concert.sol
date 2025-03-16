// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.29;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {console} from "hardhat/console.sol";

contract Concert is ERC1155, Ownable {
    // Ticket types
    uint256 public constant STANDARD = 0;
    // Ticket details
    uint256 private price;
    uint256 private totalTickets;
    uint256 public ticketsSold;
    // Other details
    bool private initialized;

    // Events
    event ConcertInfo(
        string name,
        uint256 date,
        uint256 price,
        uint256 totalTickets
    );

    constructor() ERC1155("") Ownable(msg.sender) {}

    function initialize(
        string memory _name,
        string memory _uri,
        uint256 _date,
        uint256 _price,
        uint256 _totalTickets,
        address _owner
    ) external {
        console.log("Concert: Initializing concert");
        require(!initialized, "Already initialized");
        console.log("Concert: Not initialized");
        initialized = true;
        price = _price;
        totalTickets = _totalTickets;
        console.log("Concert: Setting URI");
        _setURI(_uri);
        console.log("Concert: Transferring ownership");
        _transferOwnership(_owner);
        console.log("Concert: transferred");
        emit ConcertInfo(_name, _date, _price, _totalTickets);
        console.log("Concert: emitted");
    }

    function getOwner() external view returns (address) {
        return owner();
    }

    /*function mint(uint256 _amount) external payable {
        require(msg.value >= price * _amount, "Insufficient funds");
        require(ticketsSold + _amount <= totalTickets, "Concert is sold out");
        ticketsSold += _amount;
        _mint(msg.sender, STANDARD, _amount, "");
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }*/
}
