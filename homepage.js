$('.image-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1446,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, 
    {
    breakpoint: 800,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000
    }
  }
  ]
});
        
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  console.log (entry)
  if (entry.isIntersecting) {
    entry.target.classList.add('show')
  } 
});
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


function togglePopup() {
document.getElementById("popup-1").classList.toggle("active")
}

document.addEventListener('DOMContentLoaded', function () {
const quantityInput = document.getElementById('quantityInput');
const qtyMinus = document.querySelector('.qty-minus');
const qtyPlus = document.querySelector('.qty-plus');

qtyMinus.addEventListener('click', function () {
    // Get the current quantity value
    let currentValue = parseInt(quantityInput.value);
    
    // Ensure the value doesn't go below 1
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

qtyPlus.addEventListener('click', function () {
    // Get the current quantity value
    let currentValue = parseInt(quantityInput.value);
    
    // Increment the value
    quantityInput.value = currentValue + 1;
});
});


