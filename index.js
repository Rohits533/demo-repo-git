// Sample data: a list of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to process numbers:
// 1. Filter out only the even numbers
// 2. Multiply each even number by 2
const processEvenNumbers = (arr) => {
  return arr
    .filter(num => num % 2 === 0) // Keeps [2, 4, 6, 8, 10]
    .map(num => num * 2);         // Transforms to [4, 8, 12, 16, 20]
};

// Execute the function and display the output
const result = processEvenNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Processed even numbers (doubled):", result);
