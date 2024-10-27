const sumAll = function (num1, num2) {
    const sumOfN = n => n * (n + 1) / 2;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
    if (num1 < 0 || num2 < 0) return 'ERROR'

    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    return sumOfN(num2) - sumOfN(num1 - 1)
};

// Do not edit below this line
module.exports = sumAll;
