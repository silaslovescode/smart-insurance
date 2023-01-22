class Block{
    constractor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    
}
calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify (this.data)).tostring();
}
}
class Blockchain{
    constractor(){
        this.Xela = [this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block (0, '21/09/2022', 'Genesis block', '0');
    }
    getLatestBlock(){
        return this.Xela [this.Xela.length -1];
        }
    addBlock (newBlock) {
        newBlock.previousHash = this.getLatestBlock ().hash;
        newBlock.hash = newBlock.calculateHash();
        this.Xela.push(newBlock);
    }
    }

let xelasmartCoin = new Blockchain();
xelasmartCoin.addBlock(new Block (1, "22/9/2022", {amount: 4}))
xelasmartCoin.addBlock(new Block (2, "23/9/2022", {amount: 10}))

console.log(JSON.stringify(xelasmartCoin, null, 4));

