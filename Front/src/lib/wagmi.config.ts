import { cookieStorage, createStorage } from '@wagmi/core'
import {WagmiAdapter} from '@reown/appkit-adapter-wagmi'
import {sepolia} from '@reown/appkit/networks'


export const networks = [sepolia]

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId: process.env.NEXT_PUBLIC_APP_KIT_PROJECT_ID as string,
    networks
})
