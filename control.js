
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