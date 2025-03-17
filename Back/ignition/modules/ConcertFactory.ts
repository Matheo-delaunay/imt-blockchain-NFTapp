import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ConcertFactory", (m) => {
    //const concertAddress = m.getParameter("concertAddress");
    const concertFactory = m.contract("ConcertFactory", ["0x5FbDB2315678afecb367f032d93F642f64180aa3"]);

    return {concertFactory};
});
