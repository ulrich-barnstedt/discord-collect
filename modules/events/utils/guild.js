const channelFn = require("./channel")
const roleFn = require("./role");

module.exports = (guild) => {
    return {
        count : guild.approximateMemberCount,
        available : guild.available,
        banner : guild.banner,
        channels : guild.channels.cache.map(channel => channelFn(channel)),
        at : Date.now(),
        createdAt : guild.createdTimestamp,
        description : guild.description,
        icon : guild.icon,
        id : guild.id,
        large : guild.large,
        name : guild.name,
        owner : guild.ownerID,
        partnered : guild.partnered,
        premium : guild.premiumSubscriptionCount,
        region : guild.region,
        roles : guild.roles.cache.map(role => roleFn(role)),
        rulesChannel : guild.rulesChannelID,
        announcementsChannel : guild.publicUpdatesChannelID,
        splash : guild.splash,
        systemChannel : guild.systemChannelID
    }
}