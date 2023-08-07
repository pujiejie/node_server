var { MongoClient } = require("mongodb");

class Mongo {
    // Connection URL
    url = 'mongodb://127.0.0.1:27017'
    // create client
    client = new MongoClient(this.url);
    // db
    db = "";
    // collection
    collection = "";
    constructor(dbName = 'node_server') {
        this.dbName = dbName;
    }
    async getCollection(collectionName = '') {
        await this.client.connect();
        this.db = this.client.db(this.dbName);
        this.collection = this.db.collection(collectionName);
        return this.collection;
    }
    close() {
        this.client.close();
    }
}

module.exports = Mongo;
