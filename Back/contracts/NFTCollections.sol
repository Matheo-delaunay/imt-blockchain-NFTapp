// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFTCollections is ERC1155, Ownable, AccessControl {
    bool private initialized;
    uint256 private _tokenIds;
    mapping(uint256 => uint256) public nftPrices;
    mapping(uint256 => uint256) public nftSupply;
    mapping(uint256 => uint256) public nftMaxSupply;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    event NFTMinted(address owner, uint256 tokenId, uint256 amount);
    event NFTExchanged(address from, address to, uint256 tokenId, uint256 amount);
    event NFTListedForSale(uint256 tokenId, uint256 price);
    event NFTSold(address buyer, uint256 tokenId, uint256 price);

    constructor() ERC1155("https://api.example.com/metadata/{id}.json") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function initialize(
        address owner
    ) external {
        require(!initialized, "Already initialized");
        initialized = true;
        transferOwnership(owner);
        _setupRole(DEFAULT_ADMIN_ROLE, owner);
    }

    function mintNFT(address to, uint256 tokenId, uint256 amount, uint256 maxSupply) external onlyRole(MINTER_ROLE) {
        require(nftSupply[tokenId] + amount <= maxSupply, "Exceeds max supply");
        _mint(to, tokenId, amount, "");
        nftSupply[tokenId] += amount;
        nftMaxSupply[tokenId] = maxSupply;
        emit NFTMinted(to, tokenId, amount);
    }

    function exchangeNFT(address to, uint256 tokenId, uint256 amount) external {
        require(balanceOf(msg.sender, tokenId) >= amount, "Not enough balance");
        safeTransferFrom(msg.sender, to, tokenId, amount, "");
        emit NFTExchanged(msg.sender, to, tokenId, amount);
    }

    function listNFTForSale(uint256 tokenId, uint256 price) external {
        require(balanceOf(msg.sender, tokenId) > 0, "Not the owner");
        require(price > 0, "Price must be greater than zero");
        nftPrices[tokenId] = price;
        emit NFTListedForSale(tokenId, price);
    }

    function buyNFT(uint256 tokenId, uint256 amount) external payable {
        uint256 price = nftPrices[tokenId] * amount;
        require(price > 0, "NFT not for sale");
        require(msg.value >= price, "Insufficient funds");

        address seller = owner();
        safeTransferFrom(seller, msg.sender, tokenId, amount, "");
        payable(seller).transfer(price);

        emit NFTSold(msg.sender, tokenId, price);
    }
}
