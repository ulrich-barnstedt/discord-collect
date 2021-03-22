const { MongoClient } = require("mongodb");

const uri = require("../mongo.json");
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let database;

module.exports = (async () => {
    await client.connect();
    return database = client.db("discord-collect");
})();

