"use strict";

/*
// Selectors
console.log(document.querySelector(".content"));
console.log(document.querySelectorAll(".content"));

console.log(document.querySelector("#list"));

console.log(document.getElementById("list"));

console.log(document.getElementsByClassName("content"));
*/

/*
console.log(document.querySelector(".heading").textContent);

document.querySelector(".heading").textContent = "changed heading";

console.log(document.querySelector(".heading").textContent);

console.log(document.querySelector(".name").value);

document.querySelector(".name").value = 23;
*/

/*
// Events
// document.querySelector(".button").addEventListener("click", function () {
//   const inputValue = document.querySelector(".name").value;

//   document.querySelector(".heading").textContent = inputValue;
// });


document.querySelector("button").addEventListener("click", function () {
  const birthYear = Number(document.querySelector("input").value);

  const age = 2024 - birthYear;

  document.querySelector(".result").textContent = `result: ${age}`;
});
*/

/*
// Styles
document.querySelector("body").style.backgroundColor = "rgb(51,25,36)";
document.querySelector("body").style.padding = "1rem 0.5rem";

document.querySelector(".result").style.fontSize = "48px";

// result font-size: 2rem
// bgc body: green

document.querySelector("button").addEventListener("click", function () {
  const birthYear = Number(document.querySelector("input").value);

  const age = 2024 - birthYear;

  document.querySelector(".result").textContent = `result: ${age}`;

  document.querySelector(".result").style.fontSize = "2rem";
  document.querySelector("body").style.backgroundColor = "green";
});
*/

/*
// classList

// console.log(document.querySelector("body"));
// console.log(document.body);
// console.log(document.head);

const pElement = document.querySelector(".result");
const btnCalcAge = document.querySelector("button");

btnCalcAge.addEventListener("click", function () {
  pElement.classList.add("hello");
});

// pElement.classList.remove("result");
// pElement.classList.toggle("hello-v2");
// pElement.classList.replace("result", "hello");
*/

/*
// dark mode class for some elements

const body = document.body;
const btnToggleTheme = document.querySelector("#toggle-btn");
const input = document.querySelector(".name");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

btnToggleTheme.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  btnToggleTheme.classList.toggle("button-dark-mode");
  input.classList.toggle("name-dark-mode");
  button.classList.toggle("button-dark-mode");
  result.classList.toggle("result-dark-mode");
});
*/

/*
// style in js

const body = document.body;
const btnToggleTheme = document.querySelector("#toggle-btn");
let isDarkMode = false;

btnToggleTheme.addEventListener("click", function () {
  if (isDarkMode) {
    body.style.backgroundColor = "white";
    body.style.color = "black";

    isDarkMode = false;
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";

    isDarkMode = true;
  }
});
*/

/*
const btnToggleTheme = document.querySelector("#toggle-btn");

btnToggleTheme.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark-mode");
});
*/
