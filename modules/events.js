const util = require("util")
const mongo = require("../utils/db");

function decycle (object) {
    let objects = [],
        paths = [];

    return ( function derez (value, path) {
        let i,
            name,
            nu;

        switch (typeof value) {
            case 'object':
                if (!value) {
                    return null;
                }

                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return {$ref: paths[i]};
                    }
                }

                objects.push(value);
                paths.push(path);

                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                } else {

                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name],
                                path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
        }
    }(object, '$'));
}

const wrapBorked = (data) => {
    data = decycle(data);

    if (Array.isArray(data)) {
        return {array : data};
    }

    if (typeof data !== "object") {
        return { [typeof data] : data};
    }
}

module.exports = class {
    constructor (client, config) {
        this.client = client;
        this.events = config.events.toTrack;

        this.setupListeners();
    }

    setupListeners () {
        this.events.forEach(event => {
           this.client.on(event, (...data) => {
               this.event(event, data);
           })
        });
    }

    async event (type, data) {
        if (type === "debug" || type === "raw") return;

        console.log(`${type} : ${util.inspect(data, {depth: 0})}`);

        data = wrapBorked(data);
        (await mongo).collection(type).insertOne(data);
    }
}