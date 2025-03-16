import { decodeEventLog, type Log, type Abi, type AbiEvent, type PublicClient } from 'viem'

/**
 * Fetch and decode past events from a contract.
 *
 * @param publicClient - The public client instance from Wagmi.
 * @param contractAddress - The contract's address.
 * @param abi - The contract's ABI (from your compiled JSON, e.g. Hardhat output).
 * @param eventName - The name of the event to query.
 * @param blockRange - How many blocks back to query (defaults to 1000).
 * @returns A promise that resolves to an array of decoded events.
 */
export async function getPastEvents(
    publicClient: PublicClient,
    contractAddress: `0x${string}`,
    abi: any,
    eventName: string,
    blockRange: bigint = 1000n
): Promise<any[]> {
    const latestBlock = await publicClient.getBlockNumber()

    // Find the event fragment in the ABI
    const eventFragment = (abi as readonly any[]).find(
        (fragment) => fragment.type === 'event' && fragment.name === eventName
    ) as AbiEvent | undefined

    if (!eventFragment) {
        throw new Error(`Event "${eventName}" not found in the ABI`)
    }

    // Fetch logs within the block range
    const logs: Log[] = await publicClient.getLogs({
        address: contractAddress,
        event: eventFragment,
        fromBlock: latestBlock > blockRange ? latestBlock - blockRange : 0n,
        toBlock: latestBlock,
    })


    // Decode and return logs for easier consumption
    return logs.map((log) =>
        decodeEventLog({
            abi,
            ...log,
        })
    )
}
