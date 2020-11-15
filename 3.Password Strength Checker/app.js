const password = document.getElementById("password");
const progress = document.querySelector(".in");
const par = document.querySelector(".strnBar");
const h3 = document.querySelector("h3");

const letTemp = "abcdefghijklmnopqurstuvwxyz";
const simpleLetters = letTemp.split("");

const capitalLetters = simpleLetters.map((letter) => letter.toUpperCase());

let specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
const special = specialChars.split("");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let specialCount;
let numberCount = 0;
let upperCount;
let count = 0;

password.addEventListener("input", function () {
  let value = password.value;
  let letArr = value.split("");
  count = 0;
  par.style.display = "block";

  //counting uppercase letters
  for (let letter of letArr) {
    upperCount = countString(letter, capitalLetters);
  }

  count = 0;

  //counting symboles
  for (let letter of letArr) {
    specialCount = countString(letter, special);
  }

  count = 0;

  //   counting numbers
  for (let letter of letArr) {
    numberCount = countString(parseInt(letter), numbers);
  }
  count = 0;

  //checking password strength
  if (
    letArr.length >= 8 &&
    numberCount > 0 &&
    upperCount > 0 &&
    specialCount > 0
  ) {
    progress.style.width = "100%";
    progress.style.backgroundColor = "#009432";
    h3.innerHTML = "strong";
  } else if (
    (letArr.length >= 8 && numberCount > 0 && upperCount > 0) ||
    (letArr.length >= 8 && numberCount > 0 && specialCount > 0) ||
    (letArr.length >= 8 && upperCount > 0 && specialCount > 0)
  ) {
    progress.style.width = "80%";
    progress.style.backgroundColor = "#0fbcf9";
    h3.innerHTML = "good";
  } else if (
    (letArr.length >= 8 && numberCount > 0) ||
    (letArr.length >= 8 && upperCount > 0) ||
    (letArr.length >= 8 && specialCount > 0)
  ) {
    progress.style.width = "50%";
    progress.style.backgroundColor = "#ffda79";
    h3.innerHTML = "fair";
  } else if (letArr.length >= 8) {
    progress.style.width = "20%";
    progress.style.backgroundColor = "#ff3f34";
    h3.innerHTML = "weak";
  } else if (letArr.length < 8) {
    progress.style.width = "10%";
    progress.style.backgroundColor = "#dfe4ea";
    h3.innerHTML = "too short";
  }

  //clear data if input is empty
  if (letArr.length < 1) {
    progress.style.width = "0%";
    h3.innerHTML = "";
  }
});

//function that count inputs
function countString(value, arr) {
  for (let char of arr) {
    if (value === char) {
      count++;
    }
  }
  return count;
}
