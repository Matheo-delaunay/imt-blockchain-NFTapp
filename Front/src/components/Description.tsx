import {Button} from "@/components/ui/button";
import Image from "next/image"
import {ArrowRight} from "lucide-react";

export default function Description() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                The Future of Event Ticketing is Here
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Secure, transparent, and fraud-proof tickets powered by blockchain technology. Own your
                                tickets as
                                unique digital collectibles.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="gap-1.5">
                                Explore Events <ArrowRight className="h-4 w-4"/>
                            </Button>
                            <Button size="lg" variant="outline">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                            <Image
                                src="/chappell.jpg"
                                alt="NFT Ticket Example"
                                fill
                                className="rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
