import "./input.css";

function toggleMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("menu-overlay");
  const menuIcon = document.getElementById("menu-icon");
  const isOpen = !menu.classList.contains("translate-x-full");

  if (isOpen) {
    // Close menu
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    // Delay opacity removal for smooth transition
    setTimeout(() => {
      overlay.classList.remove("opacity-100");
      overlay.classList.add("opacity-0");
    }, 10);
    menuIcon.textContent = "☰";
  } else {
    // Open menu
    menu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    // Force reflow for transition to work
    overlay.offsetHeight;
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    menuIcon.textContent = "✕";
  }
}

// Scroll effect: make navbar more opaque on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("bg-black", "md:bg-black/80");
    navbar.classList.add("bg-black/95", "md:bg-black/95");
  } else {
    navbar.classList.remove("bg-black/95", "md:bg-black/95");
    navbar.classList.add("bg-black", "md:bg-black/80");
  }
});

// Close mobile menu on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const menu = document.getElementById("menu");
    if (!menu.classList.contains("translate-x-full")) {
      toggleMenu();
    }
  }
});

window.toggleMenu = toggleMenu;