require("dotenv").config()
import "@nomicfoundation/hardhat-ignition"
import "@nomicfoundation/hardhat-ignition-ethers"
import "@nomicfoundation/hardhat-ethers"


module.exports = {
    solidity: {
        version: "0.8.29",
        settings: {
            'optimizer': {
                'enabled': true,
                'runs': 1000
            }
        }
    },
//    networks: {
//        sepolia: {
//            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
//            accounts: [process.env.PRIVATE_KEY]
//        }
//    }
};
