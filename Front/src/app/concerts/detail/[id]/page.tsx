"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { mockEvents } from "@/lib/mockEvents"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, MapPin, Clock4 } from "lucide-react"

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
        <div className="max-w-3xl mx-auto px-8 md:px-12">
            {/* Event Header with Image */}
            <Card className="overflow-hidden border-0 rounded-t-lg shadow-md">
                <div className="relative">
                    {/* Title */}
                    <div className="p-6 pb-0">
                        <h1 className="text-3xl font-bold text-gray-700">{event.name}</h1>
                    </div>

                    {/* Main Image */}
                    <div className="flex justify-center mt-4">
                        <img
                            src={event.image || "/img.png.svg?height=300&width=600"}
                            alt={event.name}
                            className="max-w-[400px] w-full max-h-[250px] h-auto rounded-lg shadow-lg object-contain"
                        />
                    </div>
                </div>
            </Card>

            {/* Event Details Block */}
            <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden mt-4">
                {/* Red Date Block */}
                <div className="bg-red-600 text-white flex flex-col items-center justify-center px-4 py-6">
                    <span className="text-3xl font-bold">{day}</span>
                    <span className="text-lg font-semibold">{month}</span>
                    <span className="text-md">{year}</span>
                </div>

                {/* Event Info */}
                <div className="p-4 flex-1">
                    <h1 className="text-xl font-bold text-gray-800">{event.name}</h1>
                    <div className="flex items-center text-gray-600 mt-2">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{event.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                        <Clock4 className="h-5 w-5 mr-2" />
                        <span>{event.time}</span>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <Card className="border-t-0 rounded-t-none shadow-md mt-4">
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
                <div className="p-4 bg-gray-100">
                    <h3 className="text-lg font-bold mb-4">TICKETS</h3>

                    {Object.entries(event.tickets).map(([type, details]) => (
                        <div key={type} className="mb-4 bg-white rounded-md overflow-hidden shadow-sm border border-gray-300">
                            <div className="flex flex-col sm:flex-row p-4">
                                {/* Ticket Type */}
                                <div className="flex-1">
                                    <div className="text-lg font-bold">{type} Ticket</div>
                                </div>

                                {/* Price & Availability */}
                                <div className="flex-1 text-gray-600">
                                    <p>Price: {details.price} {details.currency.toUpperCase()}</p>
                                    <p>Available: {details.availability}</p>
                                </div>

                                {/* Ticket Quantity Selector & Buy Button */}
                                <div className="flex items-center gap-2">
                                    <Input
                                        type="number"
                                        min="1"
                                        max={details.availability}
                                        value={selectedTickets[type] || ""}
                                        onChange={(e) => handleQuantityChange(type, Number(e.target.value))}
                                        className="w-20 text-center border border-gray-400 rounded"
                                    />

                                    <Button
                                        disabled={!selectedTickets[type]}
                                        onClick={() => alert(`Added ${selectedTickets[type]} ${type} ticket(s) to cart`)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold transition-all"
                                    >
                                        Buy Tickets
                                    </Button>
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