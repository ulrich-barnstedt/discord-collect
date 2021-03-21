module.exports = (msg) => {
    return {
        content : msg.content,
        id : msg.id,
        author : msg.author.id,
        authorName : msg.author.tag,
        channel : msg.channel.id,
        guild : msg.channel.guild.id,
        at : Date.now(),
        createdAt : msg.createdTimestamp
    }
}