const colors = ["red", "green", "yellow"];

colors.forEach((val) => {
  console.log(val + "er");
});

const res = colors.reduce(mergeValues);

function mergeValues(accumulator, nextItem) {
  return accumulator + nextItem;
}

console.log(res);
