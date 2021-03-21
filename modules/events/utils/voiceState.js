const userFn = require("./user")

module.exports = (vcs) => {
    return {
        at : Date.now(),
        channel : vcs.channel.id,
        deaf : vcs.deaf,
        guild : vcs.guild.id,
        user : userFn(vcs.member),
        mute : vcs.mute,
        selfDeaf : vcs.selfDeaf,
        selfMute : vcs.selfMute,
        selfVideo : vcs.selfVideo,
        serverDeaf : vcs.serverDeaf,
        serverMute : vcs.serverMute,
        speaking : vcs.speaking,
        streaming : vcs.streaming
    }
}