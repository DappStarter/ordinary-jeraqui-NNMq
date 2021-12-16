require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember erosion include argue front spread'; 
let testAccounts = [
"0xe2cb41c7d44a81cf31792e93a64ac7999bf3b9a2cbd8d1496fbc8d270a99b27d",
"0xd835b4d6cb7ee16c10a36c7d03fd663fe5c1c444f491a2e014ad0b0d18186641",
"0xfc915d1a144c3af1da0bacb34155b9ad6114d38a0d7e8c246a96061d0acf8259",
"0x6ad4f1bd617d8515f3cff034d8983085c89c3695818d0ffb95c59ae17d21f186",
"0x2dbfbc20d82c4856f1b28ca452632981e600bc2afcdebc8213d27e7a49c3f4a8",
"0x4b139744417574538e28d7b626dbcc4c58c625c9bd15ea2ed87c444aa3b09b12",
"0x2b415fb7b0c1e04150eb9a473c2d90790d19f0fb4e012a5e0c531aec16e35bf3",
"0xb939291eb36b4eafe0d260c5d86750eb186b0bee6ce0b0499c19c766cad81aac",
"0xf9ec65cb9e6db3d7a1e16845781f6b4dcab7ee7dcfb3fa300c1bdea665254f00",
"0xf585d1ae48a288faf74842886aa819d8482282ac6e8f245b5ffb669bb46650f5"
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

