const CryptoJs = require("crypto-js");


export class Blockchain {
    constructor(chain, difficulty) {
        this.chain = chain;
        this.difficulty = difficulty;
    };
};

export class Block {
    constructor (index, prevHash, timeStamp, data, hash, nonce) {
        this.index = index;
        this.prevHash = prevHash.toString();
        this.timeStamp = timeStamp;
        this.data = data;
        this.hash = hash.toString();
        this.nonce = nonce;
    }

    calculateHash (index, prevHash, timestamp, data) {
        return CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
    }

    mineBlock (difficulty) {

    }
};


