const reverseString = function (string) {
    stringArray = string.split("");
    lastElement = stringArray.length - 1

    for (let i = 0; i < lastElement / 2; i++) {
        temp = stringArray[i];
        stringArray[i] = stringArray[lastElement - i];
        stringArray[lastElement - i] = temp;
    }

    reversed = stringArray.join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
