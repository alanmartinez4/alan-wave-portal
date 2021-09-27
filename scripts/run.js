const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); // compile our contract and generate the necessary files we need to work with our contract under the artifacts directory
    const waveContract = await waveContractFactory.deploy(); // Hardhat will create a local Ethereum network for us, but just for this contract. Then, after the script completes it'll destroy that local network. So, every time you run the contract, it'll be a fresh blockchain.
    await waveContract.deployed(); // wait until contract is officially deployed
    console.log("Contract deployed to: ", waveContract.address); // display the address of the contract
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();