const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const salaryInput = document.getElementById("salary");
const cityInput = document.getElementById("city");
const btnSubmit = document.getElementById("btnSubmit");
const submitForm = document.getElementById("inputForm");
const data = document.getElementById("data");

let array = [];

function render(arr) {
  arr.forEach((item, index) => {
    data.innerHTML =
      data.innerHTML +
      `
        <tr>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td class='${index}' onClick="removeItem(this)" id="remove">X</td>
        </tr>
      `;
  });
}

function removeItem(e) {
  const className = e.className;
  array.splice(className, 1);
  data.innerHTML = "";
  render(array);
}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  array.push({
    name: nameInput.value,
    email: emailInput.value,
    salary: salaryInput.value,
    city: cityInput.value,
  });
  data.innerHTML = "";
  render(array);
});
