require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endPoint = process.env.URL;
const etherscanKey = process.env.ETHERSCAN_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.8",
  networks: {
    rinkeby: {
      url: endPoint,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: etherscanKey
  }
};
