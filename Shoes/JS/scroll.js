// scroll.js
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    console.log("ScrollY:", window.scrollY);
    if (window.scrollY > 55) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  
  