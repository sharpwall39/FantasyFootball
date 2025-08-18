function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const overlay = document.getElementById("overlay");

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleSidebar);
  }

  if (overlay) {
    overlay.addEventListener("click", toggleSidebar); // click outside closes
  }
});
