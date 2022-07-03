const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Colors";
const description = "Collection of 552 colors.";
const baseUri = "ipfs://QmfAEVmjqdzKroqoePEHq51B1ZSVzhaAkvb3RXwdGjx5rK";
const sellerFee = 750;
const feeRecipient = "0xc94888E885736161991C8052E9b277F72d2CcDFe";

module.exports = {
    baseUri,
    description,
    namePrefix,
    sellerFee,
    feeRecipient
};


//const color = ["Teal", "Gold", "Pink"];