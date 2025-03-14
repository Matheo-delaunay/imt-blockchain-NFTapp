"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const musicCategories = ["Pop", "Hip Hop", "Rock", "R&B", "Rap", "Jazz"]

export default function CreateEventPage() {
    const [date, setDate] = useState<Date>()

    return (
        <div className="container max-w-4xl py-10">
            {/* Title Section */}
            <h1 className="text-3xl font-bold text-center text-gray-900">
                🎉 Create Your Event
            </h1>
            <p className="text-center text-gray-500 mb-6">
                Fill out the details below to bring your event to life.
            </p>

            <form className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Event Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Name of your event</Label>
                        <Input id="name" placeholder="Enter event name" />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <Label>Category</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {musicCategories.map((category) => (
                                    <SelectItem key={category} value={category.toLowerCase()}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Enter venue address" />
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                        <Label>Date of event</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                                >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {date ? date.toLocaleDateString() : "Pick a date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* Tickets Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tickets</h3>
                    <p className="text-sm text-muted-foreground">Set the number for each type of ticket</p>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="vip">VIP</Label>
                            <Input id="vip" type="number" min="0" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="standard">Standard</Label>
                            <Input id="standard" type="number" min="0" />
                        </div>
                    </div>
                </div>

                {/* Description and Photo Upload */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Type the description of your event here"
                            className="min-h-[360px] resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Photo</Label>
                        <Tabs defaultValue="upload" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="upload">New Upload</TabsTrigger>
                                <TabsTrigger value="recent">Recent</TabsTrigger>
                            </TabsList>
                            <TabsContent value="upload">
                                <Card>
                                    <CardContent className="min-h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                                        <div className="text-center">
                                            <p className="text-sm text-muted-foreground">
                                                Click to browse or
                                                <br />
                                                drag and drop your photo
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="recent">
                                <Card>
                                    <CardContent className="min-h-[300px] flex items-center justify-center">
                                        <p className="text-sm text-muted-foreground">No recent photos</p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Terms and Buttons */}
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>

                    <div className="flex space-x-4">
                        <Button variant="outline" type="button">
                            Save as draft
                        </Button>
                        <Button type="submit">Create event</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

