import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ConcertFactory", (m) => {
    const concertAddress = m.getParameter("concertAddress");
    const concertFactory = m.contract("ConcertFactory", [concertAddress]);

    return {concertFactory};
});
