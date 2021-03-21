module.exports = (user) => {
    if ("user" in user) user = user.user;

    return {
        bot : user.bot,
        tag : user.tag,
        id : user.id,
        at : Date.now()
    }
}