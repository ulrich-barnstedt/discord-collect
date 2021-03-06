const userFn = require("./user")

module.exports = (vcs) => {
    return {
        at : Date.now(),
        channel : vcs.channelID,
        deaf : vcs.deaf,
        guild : vcs.guild.id,
        user : userFn(vcs.member),
        mute : vcs.mute,
        selfDeaf : vcs.selfDeaf,
        selfMute : vcs.selfMute,
        selfVideo : vcs.selfVideo,
        serverDeaf : vcs.serverDeaf,
        serverMute : vcs.serverMute,
        streaming : vcs.streaming
    }
}