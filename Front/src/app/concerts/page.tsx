"use client"

import Link from "next/link"
import Image from "next/image"
import {Calendar, Clock, MapPin, Search} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {useEffect, useState} from "react"
import {usePublicClient} from "wagmi";
import {getPastEvents} from "@/lib/getPastEvents";
import ConcertFactory from "@/abis/ConcertFactory.json"

export default function ConcertsPage() {
    const publicClient = usePublicClient()
    const [events, setEvents] = useState<any[]>([])

    useEffect(() => {
        if (publicClient) {
            getPastEvents(
                publicClient,
                process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
                ConcertFactory.abi,
                "ConcertCreated"
            ).then(events => {
                console.log(events)
                setEvents(events.map(e => e.args))
            })
        }
    }, [publicClient]);


    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const filteredConcerts = events.filter((event) => {
        const matchesSearch =
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.address.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory = selectedCategory === "" || event.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="container py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Upcoming Concerts</h1>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="relative w-full sm:w-[300px]">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input
                            placeholder="Search concerts..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="Pop">Pop</SelectItem>
                            <SelectItem value="Rock">Rock</SelectItem>
                            <SelectItem value="Hip Hop">Hip Hop</SelectItem>
                            <SelectItem value="R&B">R&B</SelectItem>
                            <SelectItem value="Latin">Latin</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredConcerts.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                        <div className="aspect-[16/9] relative">
                            <Image src={event.image || "/img.png"} alt={event.name} fill className="object-cover"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="line-clamp-2">{event.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-2.5">
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground"/>
                                <span>
                                    {new Date(Number(event.date)).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground"/>
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-muted-foreground"/>
                                <span>
                                    {event.address}
                                </span>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <div className="text-sm font-medium">
                                    Starting from
                                    <span className="ml-1 text-lg font-bold">
                                        {event.tickets
                                            ? (() => {
                                                const firstTicketType = Object.keys(event.tickets)[0] as keyof typeof event.tickets
                                                return `${event.tickets[firstTicketType].price} ${event.tickets[firstTicketType].currency.toUpperCase()}`
                                            })()
                                            : "N/A"}

                                    </span>
                                </div>
                                {event.category && (
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                                        {event.category}
                                    </span>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/concerts/detail/${event.id}`}>Get Tickets</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredConcerts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No concerts found matching your criteria.</p>
                </div>
            )}
        </div>
    )
}
