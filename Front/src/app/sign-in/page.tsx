'use client'

import {useAppKit, useAppKitAccount} from '@reown/appkit/react';
import Link from "next/link"
import {ArrowLeft, Ticket} from "lucide-react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";

export default function SignInPage() {
    const {open} = useAppKit();
    const {isConnected} = useAppKitAccount()

    if (isConnected) {
        redirect("/account")
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
                <ArrowLeft className="mr-2 h-4 w-4"/>
                Back to home
            </Link>

            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Ticket className="h-6 w-6"/>
                        <h1 className="text-2xl font-semibold tracking-tight">NFTicket</h1>
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">Sign in to access your NFT tickets</p>
                </div>

                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-xl text-center">Sign in</CardTitle>
                        <CardDescription className="text-center">Connect your wallet to continue</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="flex justify-center py-2">
                                <Button onClick={() => open({view: "Connect"})}>
                                    Connect
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <p className="mt-2 text-xs text-center text-muted-foreground">
                            By connecting, you agree to our{" "}
                            <Link href="#" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="underline underline-offset-4 hover:text-primary">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

