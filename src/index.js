module.exports = function longestConsecutiveLength(array) {
  let longest = 0;
  const set = new Set(array);
  set.forEach(value => {
    let localLongest = 0;
    while (set.has(value)) {
      value++;
      localLongest++;
    }
    longest = localLongest > longest ? localLongest : longest;
  }
    return longest;
};
