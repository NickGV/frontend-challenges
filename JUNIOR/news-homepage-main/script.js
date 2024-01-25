const menuToogleBtn = document.getElementById("menu-toogle");
const navList = document.getElementById("nav-list");

menuToogleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuToogleBtn.classList.toggle("active");
});
