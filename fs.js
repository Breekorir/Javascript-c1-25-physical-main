const fs = require("fs");

fs.writeFile(
  "somewords.txt",
  "We are amazing!!! \n Second line hbdjajfbsjbcf",
  "utf-8",
  logError
);

function logError(error) {
  if (error) {
    console.log("Hello!!!");
    console.log("An error Occured!!");
    console.log("here it is: " + error.message);
  }
}

// setimeout

setTimeout(doSmth, 5000);

function doSmth() {
  console.log("Doing some work");
}


// forEach, sort, reduce, filter, ... HOF