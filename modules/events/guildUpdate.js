const guildFn = require("./utils/guild");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldM, newM) => {
    return flatDiff(oldM, newM, guildFn);
}