// sidebar.js

// Function to toggle sidebar open/close
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar && overlay) {
    const isOpen = sidebar.classList.toggle("open");
    overlay.classList.toggle("active", isOpen);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar-container");

  if (sidebarContainer) {
    // Load sidebar.html into the container
    fetch("sidebar.html")
      .then(response => response.text())
      .then(html => {
        sidebarContainer.innerHTML = html;

        // Grab elements AFTER sidebar is injected
        const menuBtn = document.getElementById("menu-btn");
        const overlay = document.getElementById("overlay");

        if (menuBtn) {
          menuBtn.addEventListener("click", toggleSidebar);
        }

        if (overlay) {
          overlay.addEventListener("click", toggleSidebar);
        }

        // Highlight current page link
        const currentPage = window.location.pathname.split("/").pop();
        const links = sidebarContainer.querySelectorAll("a");

        links.forEach(link => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          }
        });
      })
      .catch(err => console.error("Sidebar failed to load:", err));
  }
});
