function toggleAnalysis(id) {
  const content = document.getElementById(id);
  const button = event.target; // the button that was clicked

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.classList.add("active");
  } else {
    content.style.display = "none";
    button.classList.remove("active");
  }
}
