import type {Metadata} from "next"
import "./globals.css"
import React from "react";
import {headers} from "next/headers";
import ContextProvider from "@/components/ContextProvider";


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
        <html>
        <body>
        <div className="flex min-h-[100dvh] flex-col">
            <ContextProvider cookies={cookies}>{children}</ContextProvider>
        </div>
        </body>
        </html>
    )
}
