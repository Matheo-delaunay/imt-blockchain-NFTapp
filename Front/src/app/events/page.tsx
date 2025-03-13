import Link from "next/link"
import { CalendarIcon, GlobeIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons"

export default function EventsPage() {
  // Sample data - in a real app, this would come from your database
  const concerts = [
    {
      id: 1,
      title: "Summer Rock Festival",
      date: "2025-06-15",
      time: "18:00",
      venue: "City Arena",
      address: "123 Music Street, New York",
      artists: "Rock Band, The Guitars, Drum Legends",
      genre: "Rock",
    },
    {
      id: 2,
      title: "Jazz Night",
      date: "2025-07-10",
      time: "20:00",
      venue: "Blue Note Club",
      address: "456 Jazz Avenue, Chicago",
      artists: "Jazz Trio, Saxophone Master",
      genre: "Jazz",
    },
    {
      id: 3,
      title: "Electronic Dance Party",
      date: "2025-08-05",
      time: "22:00",
      venue: "Pulse Nightclub",
      address: "789 Beat Street, Miami",
      artists: "DJ Spark, Electronic Waves",
      genre: "Electronic",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Concert Events</h1>
        <Link href="/events/add-concert">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <PlusIcon className="h-4 w-4" /> Add Concert
          </button>
        </Link>
      </div>

      {concerts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-4">No concerts yet</h2>
          <p className="text-gray-500 mb-6">
            You haven't added any concerts yet. Get started by adding your first concert event.
          </p>
          <Link href="/events/add-concert">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <PlusIcon className="h-4 w-4" /> Add Your First Concert
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concerts.map((concert) => (
            <div key={concert.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">{concert.title}</h2>
                <p className="text-gray-500">{concert.genre}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {new Date(concert.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-sm text-gray-500">{concert.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GlobeIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">{concert.venue}</p>
                    <p className="text-sm text-gray-500">{concert.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PersonIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm">{concert.artists}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <button className="px-3 py-1.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                  Edit
                </button>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

