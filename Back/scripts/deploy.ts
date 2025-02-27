const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("🚀 Déploiement du contrat avec le compte :", deployer.address);
    console.log("💰 Solde du compte :", (await deployer.getBalance()).toString());

    // Déploiement du smart contract
    const NFTCollections = await hre.ethers.getContractFactory("NFTCollections");
    const nftContract = await NFTCollections.deploy();

    await nftContract.deployed();
    console.log("✅ NFTCollections déployé à :", nftContract.address);
}

// Exécuter le script
main().catch((error) => {
    console.error("❌ Erreur lors du déploiement :", error);
    process.exit(1);
});