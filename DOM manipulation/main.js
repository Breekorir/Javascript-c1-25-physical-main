//alert("Hello there!!!");

console.log(document);


console.log(typeof document);

//{prop:val}

function changeHeaderContent() {
  //doming some dome manipulation
console.log(document.querySelectorAll("h1")
);

 // document.querySelector("h1")
  for (let index = 0; index < document.querySelectorAll
    ("h1").length ; index++) {
      document.querySelectorAll("h1")[index].textContent="Heading " + index;

    
  }
}
setTimeout(changeHeaderContent ,3000)
//acsess specific elements 
//every element has accsess to some methods that can be used to access other elements
//These methods /functions include querySelector ,querySelectorAll, getElementById,getElementsByClassName,getElementsByTagNames
