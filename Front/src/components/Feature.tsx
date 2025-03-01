import {ArrowRight, Shield, Ticket, Zap} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Feature() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionary Ticketing Experience</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform combines the security of blockchain with the convenience of modern ticketing systems.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Shield className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Fraud-Proof Tickets</h3>
                        <p className="text-center text-muted-foreground">
                            Each ticket is a unique NFT on the blockchain, making counterfeiting impossible and verification
                            instant.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Instant Transfers</h3>
                        <p className="text-center text-muted-foreground">
                            Securely transfer or resell your tickets with just a few clicks. No more meeting strangers or dealing
                            with paper tickets.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Ticket className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Collectible Memorabilia</h3>
                        <p className="text-center text-muted-foreground">
                            Your tickets remain in your wallet after the event as digital collectibles, complete with event
                            memories and perks.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button size="lg" className="gap-1.5">
                        Start Exploring <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>

    )
}
