let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchbox.classList.remove('active');
    cartbox.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
    cartbox.classList.remove('active');
    loginForm.classList.remove('active');
}

let searchbox = document.querySelector('.serach-box');
document.querySelector('#search-btn').onclick = () => {
    searchbox.classList.toggle('active');
    cartbox.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

let cartbox = document.querySelector('.cart-box');
document.querySelector('#shopping-cart').onclick = () => {
    cartbox.classList.toggle('active');
    searchbox.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchbox.classList.remove('active');
    navbar.classList.remove('active');
    cartbox.classList.remove('active');
}

var swiper = new Swiper(".box-container", {
    loop: true,
    spaceBetween: 20,
    
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1020:{
        slidesPerView: 3
    }
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });