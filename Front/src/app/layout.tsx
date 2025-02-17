import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"
import {headers} from "next/headers";
import ContextProvider from "@/components/ContextProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

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
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
        </body>
        </html>
    )
}
