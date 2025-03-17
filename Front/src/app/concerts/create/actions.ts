'use server'

import {pinata} from "@/lib/config/pinata.config";

export async function upload() {
    const upload = await pinata.upload.public.json({
        name: "Concert",
        description: "Concert description",
        date: "2022-01-01:00:00:00Z",
        location: "Concert location",
        price: 250,
        category: "Pop"
    })
        .name("1")

    console.log(upload)
}
