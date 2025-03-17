// Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.


const email = "albert@eldohub.co.ke"

function reverseString(sentence){
    const arrayOfCharacters = sentence.split("")
    console.log(arrayOfCharacters);
    const reversedArrayOfChars = arrayOfCharacters.reverse()
    console.log(reversedArrayOfChars);
    
    return  reversedArrayOfChars.join("") 
    // return  sentence.split("").reverse().join("")
}

 console.log(reverseString(email))
 console.log(reverseString("Hello World"))
 console.log(reverseString("Isaisah"))