module.exports = (obj1, obj2, convert) => {
    obj1 = convert(obj1);
    obj2 = convert(obj2);

    let diff = {};
    for (let key in obj2) {
        if (obj2[key] !== obj1[key]) {
            diff[key] = {
                old : obj1[key],
                new : obj2[key]
            }
        }
    }

    diff.at = Date.now();
    return diff;
}