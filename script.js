const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
