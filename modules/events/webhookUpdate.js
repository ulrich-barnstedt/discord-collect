module.exports = async (channel) => {
    const wh = await channel.fetchWebhooks();

    return {
        at : Date.now(),
        webhooks : wh.map(whx => {
            return {
                id : whx.id,
                name : whx.name,
                avatar : whx.avatar,
                channel : whx.channelID,
                guild : whx.guild.id,
                type : whx.type,
                url : whx.url
            }
        })
    }
}