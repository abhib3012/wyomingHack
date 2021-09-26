declare const require;
const ABI = require('../../build_ropsten/contracts/nftToken.json');
export const environment = {
  production: true,
  networkID: 3,
  RPCProvider: 'https://ropsten.infura.io/v3/084897e338f14cbea8e0d249105b405f',
  RPCWSSProvider: 'wss://ropsten.infura.io/ws/v3/084897e338f14cbea8e0d249105b405f',
  ABI
};
