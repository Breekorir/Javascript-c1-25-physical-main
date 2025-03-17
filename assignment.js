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
console.log(resultTwo); // [421263270, 149376180, 1426058850, 727617900, 546105150, 510657900]Write a function `rotateArray(arr, k)` that rotates an array `arr` by `k` positions to the right. For example, if `arr = [1, 2, 3, 4, 5]` and `k = 2`, the output should be `[4, 5, 1, 2, 3]`.
//Write a function `rotateArray(arr, k)` that rotates an array `arr` by `k` positions to the right. For example, if `arr = [1, 2, 3, 4, 5]` and `k = 2`, the output should be `[4, 5, 1, 2, 3]`.


function rotateArray(arr, k) {
    if (!arr || arr.length === 0) arr;
    else if (k === 0) arr;
    else {
        // Normalize k
        k = k % arr.length;
        if (k < 0) k = arr.length + k;
        
        // Store original array length
        const n = arr.length;
        // Create temporary array to hold values
        const temp = [];
        
        // Copy original array to temp
        for (let i = 0; i < n; i++) {
            temp[i] = arr[i];
        }
        
        // Perform rotation by shifting elements
        for (let i = 0; i < n; i++) {
            arr[(i + k) % n] = temp[i];
        }
    }
}

// Test cases
let arr1 = [1, 2, 3, 4, 5];
rotateArray(arr1, 2);
console.log(arr1);     // [4, 5, 1, 2, 3]

let arr2 = [1, 2, 3];
rotateArray(arr2, 5);
console.log(arr2);     // [2, 3, 1]

let arr3 = [];
rotateArray(arr3, 3);
console.log(arr3);     // []

let arr4 = [1];
rotateArray(arr4, 1);
console.log(arr4);     // [1]

let arr5 = [1, 2, 3];
rotateArray(arr5, -1);
console.log(arr5);     // [2, 3, 1]

    

//Write a function `validateEmail(email)` that takes an email address `email` and returns true if it is a valid email address format, false otherwise.
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("user.name@domain.co")); // true
console.log(validateEmail("invalid-email@")); // false
console.log(validateEmail("another.test@domain")); // false
console.log(validateEmail("123@domain.com")); // true
console.log(validateEmail("user@sub.domain.com")); // true
//Write a function `shuffleArray(arr)` that shuffles the elements of an array `arr` in-place, so that every permutation is equally likely.
function shuffleArray(arr) {
    for (let index = 0; index < arr.length; index++) {
        let j = Math.floor(Math.random() * (index + 1));
        [arr[index], arr[j]] = [arr[j], arr[index]]; // Swap elements

        
    }
    
}
let array = [1,2,3,4,5]
shuffleArray(array)
console.log(array);
//Write a function `shuffleArray(arr)` that shuffles the elements of an array `arr` in-place, so that every permutation is equally likely.
//Write a function `binarySearch(arr, target)` that implements the binary search algorithm to find the index of `target` in a sorted array `arr`. Return -1 if `target` is not found.
