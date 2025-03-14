"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { mockEvents } from "@/lib/mockEvents"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, MapPin } from "lucide-react"

const EventDetail = () => {
    const params = useParams()
    const concertId = Number(params.id)

    const [selectedTickets, setSelectedTickets] = useState<{ [key: string]: number }>({})
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(true)

    if (isNaN(concertId)) return <h1 className="text-center text-red-500">Invalid Concert ID</h1>

    const event = mockEvents.find((c) => Number(c.id) === concertId)

    if (!event) {
        return <h1 className="text-center text-gray-500">Concert not found.</h1>
    }

    const handleQuantityChange = (ticketType: string, value: number) => {
        setSelectedTickets((prev) => ({
            ...prev,
            [ticketType]: value,
        }))
    }

    // Format date for display
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.toLocaleString("default", { month: "short" }).toUpperCase()
        const year = date.getFullYear()
        return { day, month, year }
    }

    const { day, month, year } = formatDate(event.date)

    return (
        <div className="max-w-3xl mx-auto">
            {/* Event Header with Image */}
            <Card className="overflow-hidden border-0 rounded-t-lg shadow-md">
                <div className="relative">
                    {/* Title */}
                    <div className="p-6 pb-0">
                        <h1 className="text-3xl font-bold text-gray-700">{event.name}</h1>
                    </div>

                    {/* Main Image */}
                    <div className="w-full">
                        <img
                            src={event.image || "/placeholder.svg?height=400&width=800"}
                            alt={event.name}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Date Box */}
                    <div className="absolute bottom-0 left-0 bg-red-500 text-white p-4 flex flex-col items-center justify-center w-[100px]">
                        <span className="text-4xl font-bold">{day}</span>
                        <span className="text-sm font-medium">{month}</span>
                        <span className="text-sm">{year}</span>
                    </div>
                </div>

                {/* Location and Time */}
                <div className="p-6 pt-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 mt-1" />
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{day}</span>
                                <span className="font-medium">{month}</span>
                                <span className="font-medium">{year}</span>
                            </div>
                            <div className="text-xl">
                                {event.address.split(",")[0]} | {event.address.split(",")[1]?.trim()}
                            </div>
                            <div className="text-xl">{event.time}</div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Description Section */}
            <Card className="border-t-0 rounded-t-none shadow-md">
                <div
                    className="flex justify-between items-center p-4 cursor-pointer border-b"
                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                >
                    <h2 className="text-xl font-bold">Description</h2>
                    {isDescriptionOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>

                {isDescriptionOpen && (
                    <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">{event.name}</h3>
                        <p className="mb-2">
                            Date: {day} {month} {year}, {event.time}
                        </p>
                        <p className="mb-2">Venue: {event.address.split(",")[0]}</p>
                        <p className="mb-2">{event.description}</p>
                    </CardContent>
                )}
            </Card>

            {/* Tickets Section */}
            <Card className="mt-4 border-0 shadow-md">
                <div className="bg-gray-700 text-white p-4">
                    <h2 className="text-xl font-bold">TICKETS FOR SALE</h2>
                </div>

                <div className="p-4 bg-gray-100">
                    <h3 className="text-lg font-bold mb-4">TICKETS</h3>

                    {Object.entries(event.tickets).map(([type, details]) => (
                        <div key={type} className="mb-4 bg-white rounded-md overflow-hidden shadow-sm">
                            <div className="flex flex-col sm:flex-row">
                                <div className="relative">
                                    {details.availability > 0 && (
                                        <div className="absolute top-0 left-0 bg-yellow-400 text-xs font-bold px-2 py-1">ONSALE!</div>
                                    )}
                                    <div className="p-4 font-bold">{type} Ticket</div>
                                </div>

                                <div className="flex-1 p-4 flex flex-wrap gap-2 items-center justify-between">
                                    <div className="text-gray-600">
                                        Price: {details.price} {details.currency.toUpperCase()}
                                    </div>

                                    <div className="text-gray-600">Available: {details.availability}</div>

                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="number"
                                            min="1"
                                            max={details.availability}
                                            value={selectedTickets[type] || ""}
                                            onChange={(e) => handleQuantityChange(type, Number(e.target.value))}
                                            className="w-20 text-center"
                                        />

                                        <Button
                                            disabled={!selectedTickets[type]}
                                            onClick={() => alert(`Added ${selectedTickets[type]} ${type} ticket(s) to cart`)}
                                            className="bg-blue-500 hover:bg-blue-600"
                                        >
                                            Buy Tickets
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default EventDetail

