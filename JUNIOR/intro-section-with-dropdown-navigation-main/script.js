const menuToogleBtn = document.getElementById("menu-toogle");
const navList = document.getElementById("nav-content");

menuToogleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuToogleBtn.classList.toggle("active");
});

function toggleDropdown(menuId, arrow) {
  let menu = document.getElementById(menuId);
  menu.classList.toggle("active");

  let arrowImg = arrow.querySelector("img");
  if (menu.classList.contains("active")) {
    arrowImg.src = "./images/icon-arrow-up.svg";
  } else {
    arrowImg.src = "./images/icon-arrow-down.svg";
  }
}
