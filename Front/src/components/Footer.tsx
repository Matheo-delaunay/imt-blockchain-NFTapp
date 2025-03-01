import {Ticket} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
                <div className="flex items-center gap-2">
                    <Ticket className="h-6 w-6" />
                    <span className="text-xl font-bold">NFTicket</span>
                </div>
                <nav className="flex gap-4 sm:gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} NFTicket. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
