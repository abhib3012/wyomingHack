declare const require;
const ABI = require('../../build_ropsten/contracts/nftToken.json');
const ABIWRT = require('../../build_ropsten/contracts/erc20.json');

export const environment = {
  localRemoteProvider: true,
  production: false,
  networkID: 3,
  RPCProvider: 'https://ropsten.infura.io/v3/084897e338f14cbea8e0d249105b405f',
  RPCWSSProvider: 'wss://ropsten.infura.io/ws/v3/084897e338f14cbea8e0d249105b405f',
  ABI,
  ABIWRT
};
