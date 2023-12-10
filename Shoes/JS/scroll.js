// scroll.js
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    console.log("ScrollY:", window.scrollY);
    if (window.scrollY > 110) {
      header.classList.add("sticky");
    } else if (window.scrollY === 0) {
      header.classList.remove("sticky");
    }
  });
  
  