const userFn = require("./utils/user");

module.exports = (channel, user) => {
    return {
        at : Date.now(),
        channel : {
            id : channel.id,
            name : channel.name
        },
        user : userFn(user)
    }
}