const repeatString = function (string, rep) {
    if (rep < 0) return 'ERROR'


    let repeated = ""
    for (let i = 0; i < rep; i++) {
        repeated = repeated.concat(string)
    }
    return repeated
};

// Do not edit below this line
module.exports = repeatString;
