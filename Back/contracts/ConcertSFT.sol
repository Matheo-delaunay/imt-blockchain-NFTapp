// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {ERC1155} from ".pnpm/@openzeppelin+contracts@5.2.0/node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ConcertSFT is ERC1155 {
public uint id = 1;
constructor(string uri) public ERC1155(_uri) {
_mint(msg.sender, id, 1, "");
}

function initialize(address owner, string memory collectionName, string memory collectionSymbol) external {
require(!initialized, "Already initialized");
initialized = true;
string memory name = collectionName;
string memory symbol = collectionSymbol;
}
}