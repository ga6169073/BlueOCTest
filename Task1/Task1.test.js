const { mostFrequentStringLength } = require('./Task1');
test("mostFrequentStringLength passed for empty array", () => {
    expect(mostFrequentStringLength([])).toEqual([]);
})
test("mostFrequentStringLength passed for ['a', 'ab', 'abc', 'cd', 'def', 'gh']", () => {
    expect(mostFrequentStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh'])).toEqual(['ab', 'cd', 'gh']);
})
test("mostFrequentStringLength passed for ['ab', 'cd', 'abc', 'def', 'a', 'aaaa']", () => {
    expect(mostFrequentStringLength(['ab', 'cd', 'abc', 'def', 'a', 'aaaa'])).toEqual(['ab', 'cd', 'abc', 'def']);
})
test("mostFrequentStringLength passed for ['one', 'two', 'three', 'four', 'five', 'six']", () => {
    expect(mostFrequentStringLength(['one', 'two', 'three', 'four', 'five', 'six'])).toEqual(['one', 'two', 'six']);
})
test("mostFrequentStringLength passed for ['abc', 'def', 'a', 'aaaa', 'ab', 'cd']", () => {
    expect(mostFrequentStringLength(['abc', 'def', 'a', 'aaaa', 'ab', 'cd'])).toEqual(['abc', 'def', 'ab', 'cd']);
})