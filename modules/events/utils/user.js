module.exports = (user) => {
    return {
        bot : user.bot,
        avatar : user.avatar,
        tag : user.tag,
        id : user.id,
        at : Date.now()
    }
}