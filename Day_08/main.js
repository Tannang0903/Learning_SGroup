// function doubleChar(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     result += string[i].repeat(2);
//   }
//   return result;
// }

// result = (string) =>
//   string
//     .split("")
//     .map((x) => x.repeat(2))
//     .join("");

// console.log(result("Nang"));

function freeShipping(obj) {
  let result = 0;
  for (let x in obj) {
    result += obj[x];
  }
  return result > 50;
}

let obj = { a: 50, b: 10 };
console.log(freeShipping(obj));

console.log(
  Object.values({ a: 20, b: 10 }).reduce((res, current) => {
    return res + current;
  }, 0) > 50
);
