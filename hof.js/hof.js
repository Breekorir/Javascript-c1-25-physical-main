//high order functions have two main xtics
//1. They take other functions as arguments
//2.They could return a function




function removeDuplicates (listOfwords){
    //loop through words
    //add unique words to new array

}
function calculateInterest(amounts,rates){
    //return interest = rate/100 * amount
}

function conactPerson(userDetails){
    //userDetails{name:albert,phone,email age:39 isKenyan:true}
    //validate phone format
    //other tasks ---conditional statements
    //-send email -a function to be called with email
    sendEmail(userDetails.email)
    //sendMessage -a function to be called with phone number
    sendMessage(userDetails.phone)
}
function mailerFunction(email) {
    //sending email logic here
    console.log("sending a drafted email to");
    
}

function smsSender (phone) {
    //sending messeges logic + api interactions
    console.log("sending drafted SMS to" + phone);
    
    
}





























function validatePassword(password){
//more than 8 characters,contains numbers
if (password.length<8){
    console.log("Weak password!Must contain more than 8 characters");
    
}
console.log("Done checking!");

}
const result = validatePassword("helpmecheck");

console.log(result);
