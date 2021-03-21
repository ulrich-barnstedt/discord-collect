const userFn = require("./user")
const permissionFn = require("./permission")

module.exports = (role) => {
    return {
        at : new Date(),
        color : role.color,
        createdAt : role.createdTimestamp,
        id : role.id,
        users : role.members.map(mem => userFn(mem)),
        mentionable : role.mentionable,
        name : role.name,
        permissions : role.permissions.map(perm => permissionFn(perm))
    }
}