// Given an array of numbers, write a function that calculates the average of the numbers.

function calculateAverage(acc,curr) {
    if (numbers.length === 0) {
        console.log(0);
    } else {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        console.log(sum / numbers.length);}
    
}

const numbers = [1, 2, 3, 4, 5];
calculateAverage(numbers); 
//Given an array of numbers, write a function that finds the maximum number in the array.
const scores = [32,23,19,47,98]
console.log(...scores); //the spread operator---extracts data out of an array

console.log(Math.max(...scores));


//- Given an array of numbers, write a function that filters out the even numbers and returns a new array containing only the odd numbers //filter

function filterEven(array) {
    let oddNumbers =[]
    for (let num of array){
        if(num % 2 !==0){
            oddNumbers.push(num)
        }else{}
    }

console.log(oddNumbers);
}
filterEven([1,3,5,4,6,7,9,8])



//Palindrome checker: Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards). You can use string methods such as split(), reverse(), and join() to accomplish this task.
const text = "write your name"

console.log(text.split);


//Longest word in a string: Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task.
//Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.

const email = "brigidkorir@gmail.com"
function reveseString(sentence) {
    const arrayOfCharacters= sentence.split("")
    console.log(arrayOfCharacters);
    const reversedArrayOfChars = arrayOfCharacters.reverse()
    console.log(reversedArrayOfChars);

    return reversedArrayOfChars.join("")
    
    
}
console.log(reveseString(email))
console.log(reveseString("helo world"))
console.log(reveseString("isaiah"))

//- Given an array of numbers, return an array where each element is the product of all the elements in the original array except the current element.
function getWeights(arr) {
    const finalArr = [];
    
    for (let index = 0; index < arr.length; index++) {
        let productOfOtherElements = 1; // Initialize product for each position
        
        // Multiply all elements except the current one
        for (let innerLoopindex = 0; innerLoopindex < arr.length; innerLoopindex++) {
            if (index !== innerLoopindex) { // Skip the current element
                productOfOtherElements *= arr[innerLoopindex];
            }
        }
        finalArr.push(productOfOtherElements);
    }
    return finalArr;
}

// Test cases
const result = getWeights([1, 2, 3, 4, 5]);
console.log(result); // [120, 60, 40, 30, 24]

const resultTwo = getWeights([122, 345, 34, 67, 89, 90]);
console.log(resultTwo); // [421263270, 149376180, 1426058850, 727617900, 546105150, 510657900]