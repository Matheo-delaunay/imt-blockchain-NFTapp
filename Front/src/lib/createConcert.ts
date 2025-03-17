import { useWriteContract } from "wagmi"
import ConcertFactory from "@/abis/ConcertFactory.json"
import { useAppKitAccount } from "@reown/appkit/react"

export function useCreateConcert() {
    const { writeContractAsync } = useWriteContract()
    const { isConnected } = useAppKitAccount()

    const createConcert = async (
        terms: boolean,
        name: string,
        address: string,
        date: Date | undefined,
        standardPrice: number,
        standardCount: number,
    ) => {
        if (isDataCorrect(terms, name, address, date, standardPrice, standardCount, isConnected)) {
            await writeContractAsync({
                abi: ConcertFactory.abi,
                address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
                functionName: "createConcert",
                args: [name, address, (date as Date).getTime(), standardPrice, standardCount] // date is checked in isDataCorrect
            })
        }
    }

    return { createConcert }
}

function isDataCorrect(
    terms: boolean,
    name: string,
    address: string,
    date: Date | undefined,
    standardPrice: number,
    standardCount: number,
    isConnected: boolean
) {
    return terms && name !== "" && address !== "" && date && true && standardPrice && standardCount > 0 && isConnected
}
