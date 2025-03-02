'use client'

import Link from "next/link";
import {Ticket} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useAppKitAccount} from "@reown/appkit/react";

export default function Navigation() {
    const {isConnected} = useAppKitAccount()

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Ticket className="h-6 w-6"/>
                    <Link href="/" className="text-xl font-bold">NFTicket</Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/concerts" className="text-sm font-medium hover:underline underline-offset-4">
                        Concerts
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                        About us
                    </Link>
                </nav>
                {!isConnected && (
                    <Button asChild>
                        <Link href="/sign-in">Get Started</Link>
                    </Button>
                )}
            </div>
        </header>
    )
}
