// When the user scrolls the page, execute myFunction
window.onscroll = () => stickyMenu();

// Get the header
let header = document.getElementById("header");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
stickyMenu = () => (window.pageYOffset > sticky) 
  ? header.classList.add("sticky") 
  : header.classList.remove("sticky");

// Show / hide menu mobil version
let showMenu = false;
const menuMain = document.getElementById("menu");
const btnMenuToggle = document.getElementById("btn-menu-toggle");

let actionMenu = () => {
  if( showMenu ){
    menuMain.classList.remove("show");
    showMenu = false;
  }else{
    menuMain.classList.add("show");
    showMenu = true;

  }
}

btnMenuToggle.addEventListener("click", actionMenu);