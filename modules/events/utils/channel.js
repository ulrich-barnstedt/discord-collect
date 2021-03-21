module.exports = (channel) => {
    return {
        name : channel.name,
        id : channel.id,
        guild : channel.guild.id,
        at : Date.now(),
        parent : channel.parentID,
        permissionOverwrites : channel.permissionOverwrites.map(overwrite => { return {
            allow : overwrite.allow.bitfield,
            deny : overwrite.deny.bitfield
        }}),
        type : channel.type,
        members : channel.members.keyArray()
    }
}