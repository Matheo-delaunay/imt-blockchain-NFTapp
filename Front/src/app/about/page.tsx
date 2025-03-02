import Image from "next/image"
import {Building2, Shield, Ticket, Users} from "lucide-react"

import {Card, CardContent} from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container py-12 px-4 md:px-6">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About NFTicket</h1>
                <p className="text-muted-foreground max-w-[700px] text-lg">
                    Revolutionizing the ticketing industry through blockchain technology and NFTs, making events more
                    secure,
                    transparent, and memorable.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <Ticket className="h-8 w-8 mb-2 text-primary"/>
                        <div className="text-2xl font-bold">50K+</div>
                        <p className="text-sm text-muted-foreground text-center">Tickets Sold</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <Users className="h-8 w-8 mb-2 text-primary"/>
                        <div className="text-2xl font-bold">10K+</div>
                        <p className="text-sm text-muted-foreground text-center">Happy Users</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <Building2 className="h-8 w-8 mb-2 text-primary"/>
                        <div className="text-2xl font-bold">100+</div>
                        <p className="text-sm text-muted-foreground text-center">Venue Partners</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <Shield className="h-8 w-8 mb-2 text-primary"/>
                        <div className="text-2xl font-bold">0%</div>
                        <p className="text-sm text-muted-foreground text-center">Fraud Rate</p>
                    </CardContent>
                </Card>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="relative aspect-video">
                    <Image
                        src="/img.png?height=400&width=600"
                        alt="NFTicket Mission"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Mission</h2>
                    <p className="text-muted-foreground">
                        At NFTicket, we're on a mission to transform the event ticketing industry. By leveraging
                        blockchain technology
                        and NFTs, we're creating a more secure, transparent, and engaging ticketing experience for both
                        event
                        organizers and attendees.
                    </p>
                    <p className="text-muted-foreground">
                        Our platform eliminates ticket fraud, enables secure resale, and turns every ticket into a
                        digital
                        collectible that lives on long after the event has ended.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    <div className="col-span-2 md:col-span-3 lg:col-span-4 flex justify-center flex-wrap gap-6">
                        {[
                            {
                                name: "Brice REDON",
                                role: "CEO",
                                image: "/img.png?height=400&width=400",
                            },
                            {
                                name: "Nathan AUDVARD",
                                role: "CTO",
                                image: "/img.png?height=400&width=400",
                            },
                            {
                                name: "Mathéo DELAUNAY",
                                role: "Head of Operations",
                                image: "/img.png?height=400&width=400",
                            },
                            {
                                name: "Fatou THIAW",
                                role: "Head of Marketing",
                                image: "/img.png?height=400&width=400",
                            }, {
                                name: "Aijing LI",
                                role: "Head of Product",
                                image: "/img.png?height=400&width=400",
                            }, {
                                name: "Salima BEN TURKIA",
                                role: "Head of Communication",
                                image: "/img.png?height=400&width=400",
                            },
                        ].map((member) => (
                            <div key={member.name}
                                 className="flex flex-col items-center text-center space-y-2 w-[160px]">
                                <div className="relative w-32 h-32">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="font-medium">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

