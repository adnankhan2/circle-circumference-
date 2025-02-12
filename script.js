let radius;
let cicrumference;
const PI = 3.14;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myInput").value;

  cicrumference = 2 * PI * radius;
  document.getElementById(
    "myH3"
  ).textContent = `The circumference of the circle is ${cicrumference}  cms`;
};
