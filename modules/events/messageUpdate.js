const messageFn = require("./utils/message");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldM, newM) => {
    return flatDiff(oldM, newM, messageFn);
}