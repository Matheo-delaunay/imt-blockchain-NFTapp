// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.29;

import {Concert} from "./Concert.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {console} from "hardhat/console.sol";


contract ConcertFactory {
    address private immutable TEMPLATE;

    event ConcertCreated(
        address concertAddress,
        uint256 indexed date,
        string indexed name,
        uint256 price,
        uint256 totalTickets
    );

    constructor(address concertAddress) {
        TEMPLATE = concertAddress;
    }

    function createConcert(
        string memory _name,
        string memory _uri,
        uint256 _date,
        uint256 _price,
        uint256 _totalTickets
    ) external {
        console.log("Factory: Creating concert");
        address instance = Clones.clone(TEMPLATE);
        console.log("Factory: Instance cloned");
        Concert(instance).initialize(
            _name,
            _uri,
            _date,
            _price,
            _totalTickets,
            msg.sender
        );
        console.log("Factory: Concert initialized");
        emit ConcertCreated(instance, _date, _name, _price, _totalTickets);
        console.log("Factory: Concert created");
    }
}
