import "@/app/globals.css"
import React from "react";

export default async function TestLayout({
                                               children,
                                           }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>{children}</div>
    )
}
