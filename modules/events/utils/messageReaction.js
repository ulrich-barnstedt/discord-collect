module.exports = (msgRec) => {
    return {
        count : msgRec.count,
        emoji : msgRec.emoji.name,
        emojiId : msgRec.emoji.id
    }
}