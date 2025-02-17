'use client'

import {wagmiAdapter} from '@/lib/wagmi.config'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createAppKit} from '@reown/appkit/react'
import {sepolia} from '@reown/appkit/networks'
import React, {type ReactNode} from 'react'
import {type Config, cookieToInitialState, WagmiProvider} from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

// Set up metadata
const metadata = {
    name: 'Billetterie NFT',
    description: 'AppKit Example',
    url: 'http://localhost', // origin must match your domain & subdomain
    icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId: process.env.NEXT_PUBLIC_APP_KIT_PROJECT_ID as string,
    networks: [sepolia],
    defaultNetwork: sepolia,
    metadata: metadata,
    features: {
        analytics: true,
        email: true,
        socials: false,
        collapseWallets: true,
    },
})

function ContextProvider({children, cookies}: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}

export default ContextProvider
