import {Button} from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Join the NFT Ticketing Revolution
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Whether you're an event organizer or attendee, our platform provides a seamless, secure, and exciting
                        ticketing experience.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                    <Button size="lg" className="gap-1.5">
                        For Event Organizers
                    </Button>
                    <Button size="lg" variant="outline">
                        For Attendees
                    </Button>
                </div>
            </div>
        </section>
    )
}
