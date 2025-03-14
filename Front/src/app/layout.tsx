import type {Metadata} from "next"
import "./globals.css"
import React from "react";
import {headers} from "next/headers";
import ContextProvider from "@/components/ContextProvider";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
    title: "Billeterie NFT",
    description: "Simplifiez et sécurisez la vente de vos billets avec la blockchain.",
}

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode
}>) {
    const cookies = (await headers()).get('cookie')

    return (
        <html suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-[100dvh] flex-col">
                <ContextProvider cookies={cookies}>
                    <Navigation />
                    {children}
                </ContextProvider>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
