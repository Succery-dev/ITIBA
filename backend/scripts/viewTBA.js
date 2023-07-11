const hre = require('hardhat')
const ethers = hre.ethers

let ERC6551Registry = require('../deployedABI/OASYS/ERC6551Registry.json')
let accountNFT = require('../deployedABI/OASYS/accountNFT.json')
let AccountProxy = require('../deployedABI/OASYS/AccountProxy.json')
let Account = require('../deployedABI/OASYS/Account.json')

async function main() {
  const Signers = await ethers.getSigners()
  const deployerAddress = Signers[0].address
  const realSigner = Signers[0]
  console.log(`Owner Address ${deployerAddress}`)

  const ERC6551RegistryInstance = new ethers.Contract(
    ERC6551Registry.address,
    ERC6551Registry.abi,
    realSigner,
  )

  gasString = await realSigner.getGasPrice()
  let tokenContract = accountNFT.address
  let tokenId = `0`
  let accountAddress = await ERC6551RegistryInstance.returnAccount(tokenContract, tokenId)
  console.log(` Account created @ ${accountAddress}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*

npx hardhat run --network OASYS scripts/viewTBA.js

*/
