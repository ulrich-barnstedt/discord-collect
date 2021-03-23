const mongo = require("../utils/db");
const io = require("@pm2/io");

const minSec = io.meter({
    name: 'Discord requests 5min',
    timeframe : 60 * 5
});

const longSec = io.meter({
    name: 'Discord requests 30min',
    timeframe : 60 * 30
});

module.exports = class {
    constructor (client, config) {
        (async () => {
            this.client = client;
            this.events = config.events.toTrack;
            this.db = await mongo;

            this.setup();
        })();
    }

    setup () {
        this.events.forEach(event => {
            let module = require(`./events/${event}.js`);
            this.client.on(event, async (...data) => this.eventHandler(event, await module(...data)));
        })
    }

    eventHandler (type, data) {
        console.log(`[${new Date().toLocaleTimeString()}] ${type}`);
        minSec.mark();
        longSec.mark();

        this.db.collection(type).insertOne(data);
    }
}