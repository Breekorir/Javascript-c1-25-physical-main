//- Given an array of strings, write a function that removes duplicates and returns a new array containing only the unique strings.

function removeDuplicates(strings) {
    let uniqueStrings = []; // This will hold the unique strings
    for (let i = 0; i < strings.length; i++) {
        if (!uniqueStrings.includes(strings[i])) {  // Check if the string is already in the unique list
            uniqueStrings.push(strings[i]);  // Add it if it's not a duplicate
        }
    }
    return uniqueStrings;  // Return the array of unique strings
}

// Example usage:
let inputStrings = ["apple", "banana", "apple", "orange", "banana"];
let result = removeDuplicates(inputStrings);
console.log(result);  // Output: ["apple", "banana", "orange"]
