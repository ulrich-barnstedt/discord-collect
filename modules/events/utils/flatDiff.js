const recurse = (oldObj, newObj) => {
    let diff = {};

    if (typeof oldObj !== "object" || typeof newObj !== "object") {
        if (oldObj === newObj) return undefined;

        diff = {
            new : newObj,
            old : oldObj
        }
        return diff;
    }

    for (let key in oldObj) {
        if (key in newObj) {
            let div = recurse(oldObj[key], newObj[key]);

            if (div !== undefined && Object.keys(div).length !== 0) {
                diff[key] = div;
            }
        } else {
            diff[key] = {
                old : oldObj[key],
                new : undefined
            }
        }
    }

    for (let key in newObj) {
        if (key in diff) continue;

        if (!(key in oldObj)) {
            diff[key] = {
                new : newObj[key],
                old : undefined
            }
        }
    }

    return diff;
}

module.exports = (oldObj, newObj, convert) => {
    oldObj = convert(oldObj);
    newObj = convert(newObj);

    let diff = recurse(oldObj, newObj);
    diff.at = Date.now();

    return {
        diff,
        current : newObj
    };
}