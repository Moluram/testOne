module.exports = function longestConsecutiveLength(array) {
    let set = new Set(array);

    let countContinuous = (number, incr) => {
        let localCount = 0;
        while (set.has(number)) {
            set.delete(number);
            number = incr(number);
            localCount++;
        }
        return localCount
    };

    return array.map(n => ({left: n - 1, right: n + 1}))
        .reduce((count, nAround) => Math.max(count, 1 +
                countContinuous(nAround.left, n => --n) +
                countContinuous(nAround.right, n => ++n)), 0)
};
