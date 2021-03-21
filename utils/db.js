const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let database;

module.exports = (async () => {
    await client.connect();
    return database = client.db("discord-collect");
})();

