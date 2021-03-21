module.exports = (rg) => {
    let user;
    if ("user" in rg) user = rg.user; else user = rg;

    return {
        bot : user.bot,
        tag : user.tag,
        id : user.id,
        at : Date.now(),
        nickname : rg.nickname,
        pfp : user.avatar
    }
}