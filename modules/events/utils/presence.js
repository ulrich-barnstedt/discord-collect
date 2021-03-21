const userFn = require("./user")

module.exports = (presence) => {
    if (!presence) return {};

    return {
        at : Date.now(),
        user : userFn(presence.user),
        activities : presence.activities.map(ac => {
            return {
                application : ac.applicationID,
                assets : ac.assets,
                details : ac.details,
                emoji : !ac.emoji ? {} : {
                    id : ac.emoji.id,
                    name : ac.emoji.name
                },
                name : ac.name,
                party : ac.party,
                state : ac.state,
                type : ac.type,
                url : ac.url,
                flags : ac.flags.bitfield
            }
        }),
        clientStatus : presence.clientStatus,
        status : presence.status
    }
}