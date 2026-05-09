const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("aberto");
  navbar.classList.toggle("aberto");
});

document.querySelectorAll(".nav-conteudo a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("aberto");
    navbar.classList.remove("aberto");
  });
});
