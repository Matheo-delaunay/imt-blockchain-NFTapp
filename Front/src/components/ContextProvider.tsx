'use client'

import {wagmiAdapter} from '@/lib/wagmi.config'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {type ReactNode} from 'react'
import {type Config, cookieToInitialState, WagmiProvider} from 'wagmi'
import AppKit from "@/lib/appkit.config";

// Set up queryClient
const queryClient = new QueryClient()

AppKit()

function ContextProvider({children, cookies}: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}

export default ContextProvider
