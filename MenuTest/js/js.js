var button = document.getElementById("button");
var sideMenu = document.getElementById("side-menu");
var menu = document.getElementById("menu");
var open = false;
var menuLink = document.getElementsByClassName("menu-item");
var item = document.getElementsByClassName("item");
//var submenu = document.getElementsByClassName("submenu");
var arrow = document.getElementsByClassName("fa-angle-right");
button.onclick = function() {
  button.style.transform = "rotate(90deg)";
  if (open === false) {
    open = true;
    sideMenu.style.display = "block";
    sideMenu.style.height=265+"px";
  } else {
    open = false;
    button.style.transform = "none";
    sideMenu.style.display = "none";
  }
};
menu.addEventListener(
  "click",
  function(e) {
    var p = e.target.parentElement;
    console.log(p)
    var index = Array.prototype.indexOf.call(p.children, e.target);
    if (e.target.className === "item" || e.target.className === "item open") {
      if (item[index].className === "item") {
        item[index].className += " open";
        arrow[index].style.transform = "rotate(90deg)";
      } else {
        item[index].className = "item";
        arrow[index].style.transform = "none";
      }
    }
  },
  false
);
