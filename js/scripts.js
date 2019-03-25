"use strict";

window.onload = function() {
    // remove underlying edge box shadow on hover, focus, and active
    // not finished
    let navButtons = document.querySelectorAll(".nav-button");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].firstChild.addEventListener("mouseover", () => {
            navButtons[i].style.boxShadow = "none";
        });
        navButtons[i].firstChild.addEventListener("mouseleave", () => {
            navButtons[i].style.boxShadow = "none";
        });
    }

    // expand searchbar on focus
    let navSearch = document.querySelector(".nav-search");
    let searchBar = document.querySelector("#search")
    searchBar.addEventListener("focus", () => {
        navSearch.className += " nav-search-focus";
    });
    searchBar.addEventListener("blur", () => {
        navSearch.className = "nav-search";
    });
};