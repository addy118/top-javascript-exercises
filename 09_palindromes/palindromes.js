const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter(letter => alphanumerical.includes(letter))
        .join('')

    const reversed = cleanedString.split('').reverse().join('');

    return cleanedString === reversed;
};

console.log(palindromes('racec,ar'))

// Do not edit below this line
module.exports = palindromes;
