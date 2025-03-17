// Given an array of numbers, return an array where each element is the product of all the elements in the original array except the current element.

function getWeights(arr) {
  const finalArr = [];
  for (let index = 0; index < arr.length; index++) {
    console.log("Current number: " + arr[index]);
    // multiply all the other elements except current number
    let productOfOtherElements = 1
    for(let innerLoopIndex = 0; innerLoopIndex<arr.length; innerLoopIndex++){        
        if(index !== innerLoopIndex){
            console.log("multplying : "+  arr[innerLoopIndex]);
            productOfOtherElements = productOfOtherElements * arr[innerLoopIndex]
        }
    }
    // put that result in the final Array
    finalArr.push(productOfOtherElements)
  }
  return finalArr;
}
const result = getWeights([1, 2, 3,2, 4, 5]);
console.log(result); // [ 120, 60, 40, 30, 24 ]

const resultTwo = getWeights([
  122, 32, 767, 23, 444, 34, 90, 434, 243, 545, 23,
]);
console.log(resultTwo);
