const userFn = require("./utils/user");

module.exports = (guild, user) => {
    return {
        guild : guild.id,
        ...userFn(user)
    }
}