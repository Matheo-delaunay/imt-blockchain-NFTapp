import hre from 'hardhat'
import ConcertModule from '../ignition/modules/Concert'
import ConcertFactoryModule from '../ignition/modules/ConcertFactory'

async function main() {
    // Deploy template concert
    const {concert} = await hre.ignition.deploy(ConcertModule)
    const address = await concert.getAddress()
    console.log(`Concert deployed to: ${address}`)


    // Deploy factory
    const {concertFactory} = await hre.ignition.deploy(ConcertFactoryModule, {
        parameters: {ConcertFactory: {concertAddress: address}}
    });

    console.log(`Concert factory deployed to: ${await concertFactory.getAddress()}`)

}

main().catch(console.error)
