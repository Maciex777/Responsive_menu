var toggleMenu = document.getElementById("toggle");
var menu = document.getElementById("menu");
var baner = document.getElementById("baner");
var logo = document.getElementById("logo");

//hidding menu
function hideMenu(){
  //enlighten elements other than menu
  baner.style.opacity = "1";
  logo.style.opacity = "1";
  //menu disappears when the animation ends
  menu.style.opacity = "0";
  //close cross X before class "on" is removed
  toggleMenu.classList.add("close")
  //remove class "on" after animation ends
  setTimeout(function() {
    toggleMenu.classList.remove("on");
    toggleMenu.classList.remove("close")
  }, 700);
}

//toggle menu
toggleMenu.onclick = function(event){
  event.stopPropagation();
  if(toggleMenu.classList.contains("on")){
    hideMenu();
  } else {
    menu.style.opacity = "1";
    toggleMenu.classList.add("on");
    //darken elements other than menu
    baner.style.opacity = "0.4";
    logo.style.opacity = "0.4";
  }
};

//hide menu if user click outside of menu
document.addEventListener("click", function(event) {
  if (event.target.closest("#menu")) return;
  if(toggleMenu.classList.contains("on")){
      hideMenu();
  }
});
