// scroll.js
window.addEventListener("scroll", function () {
    console.log("Scroll event fired");
    var header = document.getElementById("header");
    console.log("ScrollY:", window.scrollY);
    if (window.scrollY > 10) {
      console.log("Adding sticky class");
      header.classList.add("sticky");
    } else {
      console.log("Removing sticky class");
      header.classList.remove("sticky");
    }
  });
  
  