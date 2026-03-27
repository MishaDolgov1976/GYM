/*Menu ctart */
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
/* menu finish */

/*light gallery script start*/
lightGallery(document.querySelector(".gallery"));

/*light gallery script finish*/
