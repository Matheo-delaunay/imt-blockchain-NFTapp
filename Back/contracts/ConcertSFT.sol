// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


contract ConcertSFT is ERC1155 {
    uint id = 1;
    bool initialized;
    constructor(string memory uri) public ERC1155(uri) {
        _mint(msg.sender, id, 1, "");
    }

    function initialize(address owner, string memory collectionName, string memory collectionSymbol) external {
        require(!initialized, "Already initialized");
        initialized = true;
        string memory name = collectionName;
        string memory symbol = collectionSymbol;
    }
}