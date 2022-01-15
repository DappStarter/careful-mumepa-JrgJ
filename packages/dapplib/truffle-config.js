require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth remind pumpkin grace loan equal gasp'; 
let testAccounts = [
"0x1a413913ce873438d36261408e7e5cbb4699215adaf49cc8c378dbb95f84964d",
"0x1091e378c1f14cc9f5c0db16f75a8e4163b387e09f07e2ea5be961e1a6197062",
"0xd36442ffb12396a1ada33989df5ebff740aed366ed245216c36bbb919f776bfa",
"0x5ee0a674dd0ea9d82326c6eafa974d6fd9f1788de9c7f8c4433a56f794aadf99",
"0x20fa665f05baa588e20540801bd7fee9d86542c5b0f159308734ba01be405658",
"0x8cddafefb79d2754d55f029627dd96f8474fd0b3def45304017ef32ed9b59a9a",
"0x5e4dbd7faec6f8e1461823e39687151b42e61400e0127134791df48c028df0b8",
"0xf723f7cf5fc39cea4f604f788a4593ee1fb4d06b26f6788e6e237e8527014798",
"0xf86fe79ccaa6c18e7b570c02c6b8c70e4ad625aea5e53ade0776af0bbc6985d4",
"0x5ec8ca1e39f8e77009c043539764493446969a83a95ebd61ac5cfd046b46f45a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

