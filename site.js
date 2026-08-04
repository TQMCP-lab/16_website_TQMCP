document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");

  if (button && nav) {
    button.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
});
