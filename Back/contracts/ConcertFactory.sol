// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.29;

import {Concert} from "./Concert.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";


contract ConcertFactory {
    address private immutable TEMPLATE;

    event ConcertCreated(
        address concertAddress,
        uint256 date,
        string name,
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
        address instance = Clones.clone(TEMPLATE);
        Concert(instance).initialize(
            _name,
            _uri,
            _date,
            _price,
            _totalTickets,
            msg.sender
        );
        emit ConcertCreated(instance, _date, _name, _price, _totalTickets);
    }
}
