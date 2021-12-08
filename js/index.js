/* Menu-Responsivo */

elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav,{
  edge: "right"
});

/* PreLoader */

let loader = document.getElementById("preloader");

window.addEventListener("load", function(){ 
  loader.style.display = "none";
})