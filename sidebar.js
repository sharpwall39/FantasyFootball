// Select the toggle button and the sidebar
const toggleButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

// Add click event to toggle the sidebar open/close
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", toggleSidebar);
  }
});
