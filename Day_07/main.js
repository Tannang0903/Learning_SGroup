function findEvenNumber(array) {
  let result = -1;
  for (var i = 0; i < array.length; i++) {
    if (parseInt(array[i]) % 2 == 0 && parseInt(array[i]) >= result) {
      result = parseInt(array[i]);
    }
  }
  return result;
}
const btnArray = document.getElementById("btnArray");
btnArray.addEventListener("click", () => {
  let array = document.getElementById("inputArray").value.split(" ");
  alert(findEvenNumber(array));
});

function listFibonacci(number) {
  for (var fibonacci = [1, 1], i = 1; i < number; i++)
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);

  return fibonacci[number];
}
const btnFibo = document.getElementById("btnFibo");
btnFibo.addEventListener("click", () => {
  let number = parseInt(document.getElementById("inputFibo").value);
  alert(listFibonacci(number));
});
