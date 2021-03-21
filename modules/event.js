const mongo = require("../utils/db")

module.exports = class {
    async constructor (client, config) {
        this.client = client;
        this.events = config.events.toTrack;
        this.db = await mongo;

        this.setup();
    }

    setup () {
        this.events.forEach(event => {
            let module = require(`./events/${event}.js`);
            this.client.on(event, async (...data) => this.eventHandler(event, await module(...data)));
        })
    }

    eventHandler (type, data) {
        this.db.collection(type).insertOne(data);
    }
}