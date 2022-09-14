/**
 * @author Laura Hidalgo Rivera
 */

{
  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".mobile_menu");
    const blur = document.querySelector(".content_wrapper");
    document
      .querySelector(".menu")
      .addEventListener("click", function () {
        nav.style.width = "250px";
        blur.classList.toggle("blur_bg");
      });

    document.getElementById("close").addEventListener("click", function () {
      nav.style.width = "0";
      blur.classList.toggle("blur_bg");
    });

    const links = document.querySelectorAll("nav.mobile_menu li a")
    links.forEach(link => {
      link.addEventListener("click", function () {
        nav.style.width = "0";
        blur.classList.toggle("blur_bg");
      });
    });
    
  });
}
