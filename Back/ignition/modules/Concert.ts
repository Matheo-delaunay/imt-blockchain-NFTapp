import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Concert", (m) => {
    const concert = m.contract("Concert");

    return {concert};
});
