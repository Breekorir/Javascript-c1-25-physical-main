// - Given an array of strings, write a function that removes duplicates and returns a new array containing only the unique strings.
const fruits = ["tomato", "pineapple", "tomato", "orange"];
function removeDuplicates(strings) {
  const uniqueFruits = [];
  for (let index = 0; index < strings.length; index++) {
    if (!uniqueFruits.includes(strings[index])) {
      uniqueFruits.push(strings[index]);
    }
  }
  return uniqueFruits;
}
const result = removeDuplicates(fruits);
console.log(result);
