const channelFn = require("./utils/channel");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldC, newC) => {
    return flatDiff(oldC, newC, channelFn);
}