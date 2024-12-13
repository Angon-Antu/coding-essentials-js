// 1. Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 4));

// 2. Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log("Is 7 odd?", isOdd(7));
console.log("Is 8 odd?", isOdd(8));

// 3. Function to find the smallest number in an array
function findMin(array) {
    return Math.min(...array);
}
console.log("Smallest number:", findMin([4, 2, 9, 1, 5]));

// 4. Function to filter even numbers from an array
function filterEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));