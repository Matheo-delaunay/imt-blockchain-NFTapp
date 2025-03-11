// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ConcertSFT} from "./ConcertSFT.sol";

// importing the ERC-721 contract to deploy for an artist

contract ConcertFactory {

    event ConcertCreated(string concertName, address concertAddress, uint timestamp);

    function createConcertSFT(string memory concertName, string memory concertSymbol) external returns (address concertAddress) {
        // Import the bytecode of the contract to deploy
        bytes memory concertBytecode = type(ConcertSFT).creationCode;
        // Make a random salt based on the concert name
        bytes32 salt = keccak256(abi.encodePacked(concertName));

        assembly {
            concertAddress := create2(0, add(concertBytecode, 0x20), mload(concertBytecode), salt)
            if iszero(extcodesize(concertAddress)) {
            // revert if something gone wrong (concertAddress doesn't contain an address)
                revert(0, 0)
            }
        }
        // Initialize the collection contract with the artist settings
        ConcertSFT(concertAddress).initialize(msg.sender, concertName, concertSymbol);

        emit ConcertCreated(concertName, concertAddress, block.timestamp);
    }
}