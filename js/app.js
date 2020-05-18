/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing__container")
  .length;

for (ilet k = 1; k < containerCount + 1; k++) {
  let item = "#section" + i + "-title";
  let item_value = document.querySelector(item);
  let item_text = item_value.textContent;
  let new_line = document.createElement("li");
  let line_text = document.createTextNode(item_text);
  let list_item = "sample-nav-" + i;

  new_line.setAttribute("id", list_item);
  new_line.setAttribute("class", "nav-list-item");
  new_line.appendChild(line_text);
  unorderedList.appendChild(new_line);

  let itemTarget = document.getElementById("section" + i);
  let listTarget = document.getElementById(listItem);
  let buttonName = "section" + i + "-button";
  let buttonToAdd = document.getElementById(buttonName);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active