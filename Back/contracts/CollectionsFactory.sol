// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// importing the ERC-721 contract to deploy for an artist
import "./NFTCollections.sol";

contract CollectionsFactory{

    event CollectionCreated(string collectionName, address collectionAddress, uint timestamp);

    function createNFTCollection(string memory collectionName, string memory collectionSymbol) external returns (address collectionAddress) {
        // Import the bytecode of the contract to deploy
        bytes memory collectionBytecode = type(NFTCollections).creationCode;
        // Make a random salt based on the artist name
        bytes32 salt = keccak256(abi.encodePacked(collectionName));

        assembly {
            collectionAddress := create2(0, add(collectionBytecode, 0x20), mload(collectionBytecode), salt)
            if iszero(extcodesize(collectionAddress)) {
            // revert if something gone wrong (collectionAddress doesn't contain an address)
                revert(0, 0)
            }
        }
        // Initialize the collection contract with the artist settings
        NFTCollections(collectionAddress).initialize(msg.sender, collectionName, collectionSymbol);

        emit CollectionCreated(collectionName, collectionAddress, block.timestamp);
    }
}