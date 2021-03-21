const emojiFn = require("./utils/emoji");
const flatDiff = require("./utils/flatDiff");

module.exports = (oldC, newC) => {
    return flatDiff(oldC, newC, emojiFn);
}