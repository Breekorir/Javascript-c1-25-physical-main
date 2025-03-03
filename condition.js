// Conditional statements - allow execution of a code block {} depending on some state/condition/result/comparison

// if else , switch 

let birthYear =2008
if(2025-birthYear > 55){
    console.log("You are too old for this!!!!!");
    
}else if(2025 -  birthYear > 18){
    console.log( " Old enough to access site!!!!! ");
    console.log("Hi, welcome!");
}else{
    console.log("You are too young and hence not allowed here !!!!!");
}

// grading marks --- >80 A , >65 B , >50 C , >40 D , <40 E ----- 
// Do error checking(marks can not be below 0 or above 100)
let marks = 27

if(marks <0 || marks >100 || typeof marks !== "number" ){
    console.log("Error:- Invalid mark!!");   
}else if(marks>=80){
    console.log("Grade: A");
}else if(marks >=65){
    console.log("Grade: B");
}else if(marks >=50){
    console.log("Grade: C");
}else if(marks >=40){
    console.log("Grade: D");
}else{
    console.log("Grade: E");
}
// Rewrite this (grading) code using a switch statement

76>60 ? console.log("Hi there") : console.log("not true here")