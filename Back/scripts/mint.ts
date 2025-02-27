const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const contractAddress = "0x123456789abcdef"; // Remplace avec l'adresse du contrat déployé

    // Récupérer le contrat
    const nftContract = await ethers.getContractAt("NFTCollections", contractAddress);

    // Définir les paramètres de mint
    const recipient = "0xUserAddress"; // Adresse du destinataire
    const tokenId = 1;                 // ID du NFT
    const amount = 5;                   // Quantité à minter
    const maxSupply = 100;              // Max supply du NFT

    console.log(`Minting ${amount} NFT(s) avec l'ID ${tokenId} pour ${recipient}...`);

    // Exécuter la transaction de mint
    const tx = await nftContract.mintNFT(recipient, tokenId, amount, maxSupply);
    await tx.wait();

    console.log(`✅ NFT minté avec succès ! Transaction: ${tx.hash}`);
}

// Exécuter le script
main().catch((error) => {
    console.error("❌ Erreur lors du minting:", error);
    process.exit(1);
});
