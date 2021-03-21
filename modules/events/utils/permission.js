module.exports = (perm) => {
    return {
        bits : perm.bitfield,
        at : Date.now()
    }
}