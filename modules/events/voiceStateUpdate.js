const vcsFn = require("./utils/voiceState");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldM, newM) => {
    return flatDiff(oldM, newM, vcsFn);
}