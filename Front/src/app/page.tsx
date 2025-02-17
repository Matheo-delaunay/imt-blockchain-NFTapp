import {Card, CardContent, CardHeader} from "@/components/ui/card"


export default function Home() {
    return (
        <Card className={"m-4"}>
            <CardHeader>Connection</CardHeader>
            <CardContent>
                {/* @ts-expect-error msg */}
                <appkit-button/>
            </CardContent>
        </Card>
    )
}
