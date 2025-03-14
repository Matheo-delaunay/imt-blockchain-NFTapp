"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Ticket, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { useEffect, useState } from "react"


{/* Reste log in log out à gérer */}
export default function Navigation() {
    const { isConnected } = useAppKitAccount()
    const { close } = useAppKit()
    const pathname = usePathname()
    const router = useRouter()
    const [userLoggedIn, setUserLoggedIn] = useState(isConnected)

    // Sync the UI state when `isConnected` changes
    useEffect(() => {
        setUserLoggedIn(isConnected)
    }, [isConnected])

    // Redirect logged-in users away from the sign-in page
    useEffect(() => {
        if (userLoggedIn && pathname === "/sign-in") {
            router.replace("/account")
        }
    }, [userLoggedIn, pathname, router])

    // Handle sign-out
    const handleSignOut = async () => {
        await close() // Log out the user
        alert("Sign out succeeded") // Show a confirmation message
        setUserLoggedIn(false) // Immediately update UI state
        router.push("/") // Redirect to home page
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                    <div className="flex items-center gap-2">
                        <Ticket className="h-6 w-6" />
                        <Link href="/" className="text-xl font-bold">
                            NFTicket
                        </Link>
                    </div>
                    <nav className="flex items-center gap-6">
                        <Link href="/concerts" className="text-sm font-medium hover:underline underline-offset-4">
                            Concerts
                        </Link>
                        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                            About us
                        </Link>
                    </nav>
                </div>


                {/* Right section: Authentication buttons */}
                <div className="ml-6">
                    {userLoggedIn ? (
                        pathname === "/account" ? (
                            <Button onClick={handleSignOut}>Sign Out</Button>
                        ) : (
                            <Button asChild>
                                <Link href="/account">My Account</Link>
                            </Button>
                        )
                    ) : (
                        <Button asChild>
                            <Link href="/sign-in">Sign In/Up</Link>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    )
}

