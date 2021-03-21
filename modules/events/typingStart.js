const userFn = require("./utils/user");
const channelFn = require("./utils/channel");

module.exports = (channel, user) => {
    return {
        at : Date.now(),
        channel : channel(channel),
        user : userFn(user)
    }
}