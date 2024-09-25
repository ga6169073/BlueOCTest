const sumOfTwoLargestNumbers = (arr) => {
    let max = -Infinity, secondMax = -Infinity;
    if (arr.length < 2) {
        return "Array should have at least 2 elements";
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return max + secondMax;
}

console.log(sumOfTwoLargestNumbers([])); // Output: Array should have at least 2 elements
console.log(sumOfTwoLargestNumbers([1, 4, 2, 3, 5])); // Output: 9
console.log(sumOfTwoLargestNumbers([1, 1])); // Output: 2
console.log(sumOfTwoLargestNumbers([1, 1, 1])); // Output: 2
console.log(sumOfTwoLargestNumbers([5,1,4,5,3])); // Output: 10

module.exports = { sumOfTwoLargestNumbers }