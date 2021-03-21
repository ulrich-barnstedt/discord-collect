const guildFn = require("./utils/user");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldM, newM) => {
    return flatDiff(oldM, newM, guildFn);
}