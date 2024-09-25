const { sumOfTwoLargestNumbers } = require('./Task2');
test("sumOfTwoLargestNumbers passed for empty array", () => {
    expect(sumOfTwoLargestNumbers([])).toEqual("Array should have at least 2 elements");
})
test("sumOfTwoLargestNumbers passed for [1, 4, 2, 3, 5]", () => {
    expect(sumOfTwoLargestNumbers([1, 4, 2, 3, 5])).toEqual(9);
})
test("sumOfTwoLargestNumbers passed for [1, 1]", () => {
    expect(sumOfTwoLargestNumbers([1, 1])).toEqual(2);
})
test("sumOfTwoLargestNumbers passed for [1, 1, 1]", () => {
    expect(sumOfTwoLargestNumbers([1, 1, 1])).toEqual(2);
})
test("sumOfTwoLargestNumbers passed for [5,1,4,5,3]", () => {
    expect(sumOfTwoLargestNumbers([5, 1, 4, 5, 3])).toEqual(10);
}) 