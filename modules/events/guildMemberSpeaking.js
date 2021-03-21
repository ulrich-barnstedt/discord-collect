const userFn = require("./utils/user");

module.exports = (mem, speaking) => {
    module.exports = {
        ...userFn(mem),
        speaking : speaking.bitfield
    }
}