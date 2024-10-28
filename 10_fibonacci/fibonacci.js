const fibonacci = function (num) {
    if (num == 0) return 0;
    if (num < 0) return 'OOPS'
    const fibonacci = [1, 1];

    for (let i = 2; i < num; i++) {
        const next = fibonacci[i - 2] + fibonacci[i - 1];
        fibonacci.push(next);
    }

    return fibonacci[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
