module.exports = (emoji) => {
    return {
        animated : emoji.animated,
        author : emoji.author.id,
        available : emoji.available,
        at : Date.now(),
        guild : emoji.guild.id,
        id : emoji.id,
        identifier : emoji.identifier,
        name : emoji.name,
        file : emoji.url
    }
}