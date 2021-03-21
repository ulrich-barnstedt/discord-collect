const msgFn = require("./utils/message");

module.exports = (messages) => {
    module.exports = {
        at : Date.now(),
        messages : messages.map(msg => msgFn(msg))
    }
}