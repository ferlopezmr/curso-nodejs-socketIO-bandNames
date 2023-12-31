const { v4: uuidv4 } = require('uuid');

class Band{
    constructor(name){
        this.id = uuidv4();
        console.log(this.id);
        this.name = name;
        this.votes = 0;
    }
}

module.exports = Band;