"use client"

import Link from "next/link"
import Image from "next/image"
import {Calendar, Clock, MapPin, Search} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {useState} from "react";

// Mock data for concerts
const concerts = [
    {
        id: 1,
        title: "Taylor Swift | The Eras Tour",
        date: "2024-03-15",
        time: "20:00",
        venue: "Madison Square Garden",
        city: "New York",
        price: "299",
        image: "/img.png?height=400&width=600",
        category: "Pop",
    },
    {
        id: 2,
        title: "Ed Sheeran World Tour",
        date: "2024-03-20",
        time: "19:30",
        venue: "Wembley Stadium",
        city: "London",
        price: "189",
        image: "/img.png?height=400&width=600",
        category: "Pop",
    },
    {
        id: 3,
        title: "Metallica",
        date: "2024-04-05",
        time: "21:00",
        venue: "Rose Bowl",
        city: "Los Angeles",
        price: "250",
        image: "/img.png?height=400&width=600",
        category: "Rock",
    },
    {
        id: 4,
        title: "The Weeknd",
        date: "2024-04-15",
        time: "20:00",
        venue: "United Center",
        city: "Chicago",
        price: "225",
        image: "/img.png?height=400&width=600",
        category: "R&B",
    },
    {
        id: 5,
        title: "Bad Bunny",
        date: "2024-05-01",
        time: "20:30",
        venue: "American Airlines Arena",
        city: "Miami",
        price: "275",
        image: "/img.png?height=400&width=600",
        category: "Latin",
    },
    {
        id: 6,
        title: "Drake",
        date: "2024-05-10",
        time: "21:00",
        venue: "Scotiabank Arena",
        city: "Toronto",
        price: "295",
        image: "/img.png?height=400&width=600",
        category: "Hip Hop",
    },
]

export default function ConcertsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredConcerts = concerts.filter((concert) => {
        const matchesSearch =
            concert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            concert.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
            concert.city.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || concert.category === selectedCategory
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
                {filteredConcerts.map((concert) => (
                    <Card key={concert.id} className="overflow-hidden">
                        <div className="aspect-[16/9] relative">
                            <Image src={concert.image} alt={concert.title} fill className="object-cover"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="line-clamp-2">{concert.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-2.5">
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground"/>
                                <span>
                  {new Date(concert.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                  })}
                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground"/>
                                <span>{concert.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-muted-foreground"/>
                                <span>
                  {concert.venue}, {concert.city}
                </span>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <div className="text-sm font-medium">
                                    Starting from
                                    <span className="ml-1 text-lg font-bold">${concert.price}</span>
                                </div>
                                <span
                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  {concert.category}
                </span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/concerts/${concert.id}`}>Get Tickets</Link>
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

