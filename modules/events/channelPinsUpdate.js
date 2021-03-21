const channelFn = require("./utils/channel")
const msgFn = require("./utils/message")

module.exports = async (channel) => {
    return {
        ...channelFn(channel),
        pins : (await channel.messages.fetchPinned()).map(msg => msgFn(msg))
    }
}