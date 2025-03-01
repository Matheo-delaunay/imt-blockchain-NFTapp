'use client'

import {Card, CardContent, CardHeader} from "@/components/ui/card"
import { useAppKitAccount } from "@reown/appkit/react";


export default function Page() {
    const { address } = useAppKitAccount()

    return (
        <Card className={"m-4"}>
            <CardHeader>Addr</CardHeader>
            <CardContent>
                {address}
            </CardContent>
        </Card>
    )
}
