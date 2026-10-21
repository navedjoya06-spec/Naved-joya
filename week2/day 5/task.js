
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", function () {
  const menuIsOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", menuIsOpen);
  menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});

// Close the mobile menu when a link is clicked.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically display the current year.
document.getElementById("year").textContent =
  new Date().getFullYear();