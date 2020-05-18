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

for (let k = 1; k < (containerCount + 1); k++) {
  let item = "#section" + k + "-title";
  let item_value = document.querySelector(item);
  let item_text = item_value.textContent;
  let new_line = document.createElement("li");
  let line_text = document.createTextNode(item_text);
  let list_item = "sample-nav-" + k;

  new_line.setAttribute("id", list_item);
  new_line.setAttribute("class", "nav-list-item");
  new_line.appendChild(line_text);
  unorderedList.appendChild(new_line);

  let item_target = document.getElementById("section" + k);
  let list_target = document.getElementById(list_item);
  let button_name = "section" + k + "-button";
  let button_to_add = document.getElementById(buttonName);


/**
 */
 
list_target.addEventListener("click", function() {
    item_target.scrollIntoView ({
      behavior: 'smooth'}
    )
//Added behavior smooth as per review. There is now a visible scroll
    button_to_add.innerHTML =
      "<button class='section-button' onclick='goToTop()'>Return to Top</button>";
  });
}

 /* 
 * End Helper Functions
 * 
 * 
 * 
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