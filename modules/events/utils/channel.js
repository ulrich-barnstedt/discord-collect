module.exports = (channel) => {
    let roleIds = channel.permissionOverwrites.keyArray();

    return {
        name : channel.name,
        id : channel.id,
        guild : channel.guild.id,
        at : Date.now(),
        parent : channel.parentID,
        permissionOverwrites : channel.permissionOverwrites.map((overwrite, id) => {
            return {
                allow : overwrite.allow.bitfield,
                deny : overwrite.deny.bitfield,
                id
            }
        }),
        type : channel.type,
        members : channel.members.keyArray()
    }
}