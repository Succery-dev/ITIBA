require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity: {
		version: "0.8.13",
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	allowUnlimitedContractSize: true,
	networks: {
		hardhat: {},
		ETH_MAINNET: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		},
		ETH_GOERLI: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		},

		OASYS: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://rpc.testnet.oasys.games` // https://scan.testnet.oasys.games/  9372
		}

	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	},
	paths: {
		artifacts: './artifacts'
	}

}