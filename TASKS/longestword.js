// Longest word in a string: Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task.


const sentence = "Longest word in a string: Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task."

// console.log( sentence.split(" ") );
function getLongestWord(str){
    let lengthOfTheLongestWord = 1
    let longestWord = ""
    const arrayOfWords = str.split(" ")
    
    for(let i=0;i<arrayOfWords.length;i++){
        if(arrayOfWords[i].length > lengthOfTheLongestWord){
            lengthOfTheLongestWord = arrayOfWords[i].length
            longestWord = arrayOfWords[i]
            // console.log(longestWord);
            
        }

    }
    // console.log(longestWord); 
    return longestWord   
}
const result1 = getLongestWord(sentence)
const result2 = getLongestWord("sentence again tommorrow loot")
const result3 = getLongestWord("albert melly")
console.log(result2);


const numbers = [2,54,323,43,55]

console.log( numbers.sort());
// console.log( numbers.forEach(()=>{})); -- hof
