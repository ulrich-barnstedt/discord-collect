module.exports = (user) => {
    return {
        bot : user.bot,
        avatar : user.avatar,
        tag : user.tag,
        id : user.id,
        locale : user.locale,
        at : Date.now()
    }
}