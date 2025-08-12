

// ===== 1. Efeito de Digitação no Cargo =====
const roleElement = document.querySelector(".role");
const text = "Desenvolvedor Front-end";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    roleElement.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100);
  }
}
roleElement.textContent = "";
typeEffect();

// ===== 2. Animação ao Rolar a Página =====
const sections = document.querySelectorAll("main section");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// ===== 3. Botão Voltar ao Topo =====
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.classList.add("back-to-top");
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// ===== 4. Validação Simples do Formulário =====
const form = document.querySelector(".contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  form.reset();
});
