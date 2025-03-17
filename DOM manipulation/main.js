// alert("Hello there!!!!!!");

console.log(document);

console.log(typeof document);

//  { prop: "val", prop: "val" }

// function changeHeaderContent() {
//   // doming some dom manipulation
//   console.log(document.querySelectorAll("h1"));

//   // document.querySelectorAll("h1")
//   for (let index = 0; index < document.querySelectorAll("h1").length; index++) {
//     document.querySelectorAll("h1")[index].textContent = "Heading " + index;
//   }
// }

// let age = 90

setTimeout(() => {
  // doming some dom manipulation
  console.log(document.querySelectorAll("h1"));

  // document.querySelectorAll("h1")
  for (let index = 0; index < document.querySelectorAll("h1").length; index++) {
    document.querySelectorAll("h1")[index].textContent = "Heading " + index;
  }
}, 3000);

/// access specific elements
// Every element has access to some methods that can be used to access other elements
// These methods/functions include querySelector, querySelectorAll, getElementById, getElementsByClassName, getElementsByTagName


