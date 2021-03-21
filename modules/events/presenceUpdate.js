const presenceFn = require("./utils/presence");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldM, newM) => {
    return flatDiff(oldM, newM, presenceFn);
}