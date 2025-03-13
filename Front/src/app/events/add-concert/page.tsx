"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Form from "@radix-ui/react-form"
import * as Select from "@radix-ui/react-select"
import { CarIcon as CaretSortIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { z } from "zod"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  time: z.string().min(1, {
    message: "Start time is required.",
  }),
  venue: z.string().min(1, {
    message: "Venue is required.",
  }),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  artists: z.string().min(1, {
    message: "At least one artist is required.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  ticketPrice: z.string().min(1, {
    message: "Ticket price is required.",
  }),
  ticketUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  capacity: z.string().min(1, {
    message: "Capacity is required.",
  }),
  genre: z.string().min(1, {
    message: "Genre is required.",
  }),
})

export default function AddConcertPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedGenre, setSelectedGenre] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      address: "",
      artists: "",
      description: "",
      ticketPrice: "",
      ticketUrl: "",
      capacity: "",
      genre: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // In a real app, you would send this data to your API
      console.log(values)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      alert(`Concert "${values.title}" added successfully!`)

      // Redirect to events list
      router.push("/events")
    } catch (error) {
      alert("Something went wrong. Your concert could not be added. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Add New Concert</h1>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Concert Details</h2>
          <p className="text-gray-500 mt-1">
            Enter the details for the new concert event you want to add to your venue.
          </p>
        </div>

        <div className="p-6">
          <Form.Root onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title Field */}
              <Form.Field name="title" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Concert Title</Form.Label>
                  {errors.title && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.title.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Summer Rock Festival 2025"
                    {...register("title")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Date Field */}
              <Form.Field name="date" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Date</Form.Label>
                  {errors.date && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.date.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      const date = e.target.value ? new Date(e.target.value) : undefined
                      setSelectedDate(date)
                      if (date) setValue("date", date)
                    }}
                  />
                </Form.Control>
              </Form.Field>

              {/* Time Field */}
              <Form.Field name="time" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Start Time</Form.Label>
                  {errors.time && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.time.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("time")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Venue Field */}
              <Form.Field name="venue" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Venue</Form.Label>
                  {errors.venue && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.venue.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City Arena"
                    {...register("venue")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Address Field */}
              <Form.Field name="address" className="space-y-2 md:col-span-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Address</Form.Label>
                  {errors.address && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.address.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="123 Music Street, City, Country"
                    {...register("address")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Artists Field */}
              <Form.Field name="artists" className="space-y-2 md:col-span-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Artists</Form.Label>
                  {errors.artists && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.artists.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Band Name, Supporting Act, DJ Name"
                    {...register("artists")}
                  />
                </Form.Control>
                <p className="text-sm text-gray-500">Separate multiple artists with commas</p>
              </Form.Field>

              {/* Genre Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                {errors.genre && <p className="text-sm font-medium text-red-500">{errors.genre.message}</p>}
                <Select.Root
                  onValueChange={(value) => {
                    setSelectedGenre(value)
                    setValue("genre", value)
                  }}
                >
                  <Select.Trigger
                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Genre"
                  >
                    <Select.Value placeholder="Select a genre" />
                    <Select.Icon>
                      <CaretSortIcon />
                    </Select.Icon>
                  </Select.Trigger>

                  <Select.Portal>
                    <Select.Content
                      className="overflow-hidden bg-white rounded-md shadow-md border border-gray-200"
                      position="popper"
                    >
                      <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                        <ChevronLeftIcon className="rotate-90" />
                      </Select.ScrollUpButton>

                      <Select.Viewport className="p-1">
                        <Select.Group>
                          {["rock", "pop", "electronic", "hiphop", "jazz", "classical", "country", "other"].map(
                            (genre) => (
                              <Select.Item
                                key={genre}
                                value={genre}
                                className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-default select-none outline-none data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-500"
                              >
                                <Select.ItemText>{genre.charAt(0).toUpperCase() + genre.slice(1)}</Select.ItemText>
                                <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                                  <CheckIcon />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ),
                          )}
                        </Select.Group>
                      </Select.Viewport>

                      <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                        <ChevronRightIcon className="rotate-90" />
                      </Select.ScrollDownButton>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>

              {/* Capacity Field */}
              <Form.Field name="capacity" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Capacity</Form.Label>
                  {errors.capacity && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.capacity.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="500"
                    {...register("capacity")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Ticket Price Field */}
              <Form.Field name="ticketPrice" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Ticket Price</Form.Label>
                  {errors.ticketPrice && (
                    <Form.Message className="text-sm font-medium text-red-500">
                      {errors.ticketPrice.message}
                    </Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="$49.99"
                    {...register("ticketPrice")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Ticket URL Field */}
              <Form.Field name="ticketUrl" className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Ticket URL</Form.Label>
                  {errors.ticketUrl && (
                    <Form.Message className="text-sm font-medium text-red-500">{errors.ticketUrl.message}</Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://tickets.example.com"
                    {...register("ticketUrl")}
                  />
                </Form.Control>
              </Form.Field>

              {/* Description Field */}
              <Form.Field name="description" className="space-y-2 md:col-span-2">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-sm font-medium">Description</Form.Label>
                  {errors.description && (
                    <Form.Message className="text-sm font-medium text-red-500">
                      {errors.description.message}
                    </Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                    placeholder="Describe the concert, special features, etc."
                    {...register("description")}
                  />
                </Form.Control>
              </Form.Field>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <Form.Submit asChild>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Add Concert"}
                </button>
              </Form.Submit>
            </div>
          </Form.Root>
        </div>
      </div>
    </div>
  )
}

