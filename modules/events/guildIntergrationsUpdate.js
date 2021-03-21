module.exports = async (guild) => {
    let gI = await guild.fetchIntegrations();

    return {
        integrations : gI.map(int => {
            return {
                id : int.id,
                name : int.name,
                type : int.type
            }
        }),
        at : Date.now()
    }
}