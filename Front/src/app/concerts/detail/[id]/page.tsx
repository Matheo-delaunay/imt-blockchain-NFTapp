"use client"

import { useParams } from "next/navigation";

const concerts = [
    {
        id: 1,
        title: "Lady Gaga in Singapore",
        date: "2024-05-19",
        time: "20:00",
        venue: "National Stadium",
        city: "Singapore",
        price: "299",
        image: "/25sg_ladygaga.jpg?height=400&width=600",
        category: "Pop",
    },
    {
        id: 7,
        title: "Taylor Swift | The Eras Tour",
        date: "2024-03-15",
        time: "20:00",
        venue: "Madison Square Garden",
        city: "New York",
        price: "299",
        image: "/img.png?height=400&width=600"
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

export default function ConcertDetailPage() {
    const params = useParams();
    const concertId = Number(params.id);

    if (isNaN(concertId)) return <h1>Invalid Concert ID</h1>;

    const concert = concerts.find((c) => c.id === concertId);

    if (!concert) {
        return <h1>Concert Not Found</h1>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{concert.title}</h1>
            <img src={concert.image} alt={concert.title} className="w-full max-w-md" />
            <p><strong>Date:</strong> {concert.date}</p>
            <p><strong>Time:</strong> {concert.time}</p>
            <p><strong>Venue:</strong> {concert.venue}, {concert.city}</p>
            <p><strong>Price:</strong> ${concert.price}</p>
        </div>
    );
}