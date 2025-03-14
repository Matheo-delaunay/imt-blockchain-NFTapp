import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"


export default function MyAccount() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-6">
                <Tabs defaultValue="orders">
                    <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 h-auto">
                        <TabsTrigger
                            value="orders"
                            className="border-b-2 border-transparent data-[state=active]:border-[#1e50a0] data-[state=active]:bg-transparent rounded-none px-8 py-4 text-base font-medium"
                        >
                            My orders
                        </TabsTrigger>
                        <TabsTrigger
                            value="profile"
                            className="border-b-2 border-transparent data-[state=active]:border-[#1e50a0] data-[state=active]:bg-transparent rounded-none px-8 py-4 text-base font-medium"
                        >
                            My Profile
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="orders" className="pt-6">
                        <Card className="border rounded-md">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">MY ORDERS</h2>
                                    <div className="flex items-center">
                                        <span className="mr-2">Filter by :</span>
                                        <Select defaultValue="current">
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Current Orders" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="current">Current Orders</SelectItem>
                                                <SelectItem value="past">Past Orders</SelectItem>
                                                <SelectItem value="all">All Orders</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <p className="text-gray-700">You have not placed any orders yet.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="profile">
                        <div className="pt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">My Profile</h2>
                                    <p>Your profile information will appear here.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

            {/* Footer */}
            <footer className="border-t py-6">
                <div className="container mx-auto px-4">
                    <div className="text-sm text-gray-600 space-y-4">
                        <p>
                            We use your information to provide you with our services, which we personalise based on information we
                            hold about you and how you interact with us. In particular, they allow you to receive your tickets, to be
                            warned in case of major modification on your event (cancellation, report...), to access your account and
                            order history, to receive personalized marketing offers and make your forthcoming orders easier. You can
                            at any time exercise your right of withdrawal in the My account section or by clicking on the opt-out link
                            in the emails that are sent to you. Please see our{" "}
                            <Link href="#" className="text-[#1e50a0]">
                                Privacy Policy
                            </Link>{" "}
                            for full details. The{" "}
                            <Link href="#" className="text-[#1e50a0]">
                                Your Choices and Rights
                            </Link>{" "}
                            section explains what rights you have over your information including the right to ask us not to
                            personalise your experience.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

