const arrayEven = document.getElementById("input").value.split(" ");
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", () => {
  alert(findEvenNumber(arrayEven));
});