var toggleMenu = document.getElementById("toggle");
var menu = document.getElementById("menu");

//hidding menu
function hideMenu(){
  //enlighten elements other than menu
  baner.style.opacity = "1";
  logo.style.opacity = "1";
  //menu disappears when the animation ends
  menu.style.opacity = "0";
  setTimeout(function() {
    toggleMenu.classList.remove("on");
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
