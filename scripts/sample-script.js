
const hre = require("hardhat");

async function main() {
  const MintExample = await hre.ethers.getContractFactory("MintExample");
  const mintExample = await MintExample.deploy("Minter", "MIM");

  await mintExample.deployed(); // Deployed the contract to network.

  console.log("MintExample deployed to:", mintExample.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
