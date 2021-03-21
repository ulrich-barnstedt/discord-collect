const Discord = require("discord.js");
const token = require("./token.json");
const config = require("./config.json");
const fs = require("fs");

new class Bot {
    constructor (token) {
        this.client = new Discord.Client();
        this.token = token;

        this.login();
        this.client.on("ready", () => {
            console.log(`Logged in as ${this.client.user.tag}`);

            this.setupModules();
        })

        this.modules = [];
    }

    login () {
        this.client.login(this.token);
    }

    setupModules () {
        this.modules = fs.readdirSync("./modules").map(file => require(`./modules/${file}`)).map(Module => new Module(this.client, config, this.modules));
    }
}(token);