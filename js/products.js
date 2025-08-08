// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// Load newsletter
fetch("newsletter.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("newsletter").innerHTML = data;
  });

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

// Add layout toggle event listeners
document.addEventListener("DOMContentLoaded", () => {
  const showListBtn = document.getElementById("showList");
  const showGridBtn = document.getElementById("showGrid");

  if(showListBtn) {
    showListBtn.addEventListener("click", () => {
      if (!window.location.href.includes("products list.html")) {
        window.location.href = "products list.html";
      }
    });
  }

  if(showGridBtn) {
    showGridBtn.addEventListener("click", () => {
      if (!window.location.href.includes("products grid.html")) {
        window.location.href = "products grid.html";
      }
    });
  }
});
