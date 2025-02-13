// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTCollections is ERC721 {

    bool private initialized;

    constructor(address collectionAddress) ERC721("Placeholder", "PLH") {
        address add= collectionAddress;
    }

    function initialize(address owner, string memory collectionName, string memory collectionSymbol) external {
        require(!initialized, "Already initialized");
        initialized = true;
        string memory name = collectionName;
        string memory symbol = collectionSymbol;
    }
}
