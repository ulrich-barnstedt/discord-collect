const userFn = require("./utils/user");
const msgRecFn = require("./utils/messageReaction");

module.exports = (reaction, user) => {
    return {
        user : userFn(user),
        messageReaction : msgRecFn(reaction),
        at : Date.now()
    }
}