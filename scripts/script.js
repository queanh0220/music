/* 
Name: Que Anh
file name: script.js
date: 10/3/2022
*/

//hambuger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
    menu.style.display = "none";
    } else {
    menu.style.display = "block";
    }
}