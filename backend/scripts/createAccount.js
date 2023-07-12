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

  let implementation = AccountProxy.address
  let chainId = `9372`;
  let tokenContract = accountNFT.address
  let tokenId = `0`
  let salt = `0`;
  let initData = `0x8129fc1c`
  let accountAddress = await ERC6551RegistryInstance.account(implementation, chainId, tokenContract, tokenId, salt)
  console.log(` Account created @ ${accountAddress}`)


  tx = await ERC6551RegistryInstance.createAccount(implementation, chainId, tokenContract, tokenId, salt, initData, {
    gasPrice: gasString.mul(2),
  })
  await tx.wait(2)
  console.log(
    tx
  )

  const AccountInstance = new ethers.Contract(
    accountAddress,
    Account.abi,
    realSigner,
  )
  let ownerResult = await AccountInstance.owner();
  console.log(`Owner Address : ${ownerResult}`)

  let tokenResult = await AccountInstance.token()
  console.log(`Token Address :${tokenResult}`)

}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});

/*

npx hardhat run --network OASYS scripts/createAccount.js

*/
