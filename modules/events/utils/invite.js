module.exports = (invite) => {
    return {
        at : Date.now(),
        code : invite.code,
        channel : invite.channel.id,
        url : invite.url,
        guild : invite.channel.guild.id
    }
}