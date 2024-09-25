const mostFrequentStringLength = (arr) => {
    const hashMap = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i].length)) {
            hashMap.set(arr[i].length, hashMap.get(arr[i].length) + 1)
        } else {
            hashMap.set(arr[i].length, 1)
        }
    }
    const maxFrequency = Math.max(...hashMap.values())
    const mostFreqStringsLength = [...hashMap.keys()].filter(key => hashMap.get(key) === maxFrequency)
    return arr.filter(str => mostFreqStringsLength.includes(str.length));
}

console.log(mostFrequentStringLength([])); // Output: []
console.log(mostFrequentStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh'])); // Output: ['ab', 'cd', 'gh']
console.log(mostFrequentStringLength(['ab', 'cd', 'abc', 'def', 'a', 'aaaa'])); // Output: [ 'ab', 'cd', 'abc', 'def' ]
console.log(mostFrequentStringLength(['one', 'two', 'three', 'four', 'five', 'six'])); //Output: [ 'one', 'two', 'six' ]
console.log(mostFrequentStringLength(['abc', 'def', 'a', 'aaaa', 'ab', 'cd'])); // Output: [ 'abc', 'def','ab', 'cd', ]

module.exports = { mostFrequentStringLength }