import {cookieStorage, createStorage, http} from '@wagmi/core'
import {WagmiAdapter} from '@reown/appkit-adapter-wagmi'
import {hardhat} from "@reown/appkit/networks";

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId: process.env.NEXT_PUBLIC_APP_KIT_PROJECT_ID as string,
    networks: [hardhat],
    transports: {
        [hardhat.id]: http('http://localhost:8545')
    }
})
