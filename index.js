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

// 5. Function to sort an array in descending order
function sortArrayDescending(array) {
    return array.slice().sort((a, b) => b - a);
}
console.log("Array sorted in descending order:", sortArrayDescending([4, 2, 9, 1, 5]));

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(string) {
    if (string.length === 0) return string;
    return string[0].toLowerCase() + string.slice(1);
}
console.log("Lowercased first letter:", lowercaseFirstLetter("Hello World"));

// 7. Function to find the average of an array of numbers
function findAverage(array) {
    if (array.length === 0) return 0;
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
}
console.log("Average:", findAverage([4, 2, 9, 1, 5]));

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
console.log("Is 2024 a leap year?", isLeapYear(2024));
console.log("Is 1900 a leap year?", isLeapYear(1900));
console.log("Is 2000 a leap year?", isLeapYear(2000));
