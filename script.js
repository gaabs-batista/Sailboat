// Pequena animação ao carregar

window.addEventListener("load", () => {

  const content = document.querySelector(".hero-content");

  content.style.opacity = "0";
  content.style.transform = "translateY(40px)";

  setTimeout(() => {
    content.style.transition = "1.2s ease";

    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 200);

});