// JavaScript Document
console.log("hi");

// selecteer de knoppen via structuur
let navOpenButton = document.querySelector("header > button");
let navElement = document.querySelector("header > nav");
let navCloseButton = document.querySelector("header > nav > button");

// open
navOpenButton.addEventListener("click", function() {
  navElement.setAttribute("data-open", "true");
});

// sluit
navCloseButton.addEventListener("click", function() {
  navElement.removeAttribute("data-open");
});
