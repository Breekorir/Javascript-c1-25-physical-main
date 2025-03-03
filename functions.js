// Function -  is a reusable block of code {} . Functions create their own scope for variables. 

// defining/creating a funciton ---  regular functions vs arrow functions

function doSomething(){
    console.log("Block of code to be executed ");
    console.log("Regular function");  
}

const doSomethingElse = ()=>{
    console.log("Block of code to be executed ");
    console.log("Arrow function");
}

// using/calling/invoking functions --  as many times as we want

doSomething()
doSomethingElse()
doSomethingElse()
doSomethingElse()
doSomething()

let username = "albert"

// write a function to convert money to different currencies depending on the country provided
function convertCurrency(amount,country){
    // amount and country are parameters/arguments  for this cunftion - they are variables only accessible inside this function's block/scope
    // any other variable created within this block of code is only accesible here. 
   
    console.log("Hello my friend from "+ country);
    if(country=="USA"){
        console.log("Amount is: "+ amount/129 + "USD" );
    }else if(country== "uganda"){
        console.log("Amount is: "+ amount*28 + "UGSH" );
    }else if(country == "japan"){
        console.log("Amount is: "+ amount*1.17 + "YEN" );
    }else{
        console.log("Amount is: "+ amount+ "KSH" );
    }
    console.log(username);

}
//calling the function
convertCurrency(2000, "USA")
convertCurrency(2000, "uganda")
convertCurrency(2000, "japan")
convertCurrency(543, "japan")

// global scope vs block scope

// Write a function that takes a number as an argument and checks if the number is even or odd
// write a function that takes in an array of names, loops through the names changing them to all uppercase

// strings and numbers and arrays
