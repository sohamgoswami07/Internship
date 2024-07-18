// Navbar Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const nav = document.querySelector('.nav');

// Show Menu
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.style.left = "0%";
      navMenu.classList.add('show-menu');
   })
}

// Hide Menu
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.style.left = "-100%";
      navMenu.classList.remove('show-menu');
   })
};

// Sticky Navbar
window.addEventListener("scroll", function () {
   nav.classList.toggle("sticky", window.scrollY > 0);
});

// Gallery Image Maximize and Minimize
document.querySelectorAll('.gallery_img').forEach(image => {
   image.onclick = () => {
      document.querySelector('.popup_img').style.display = 'block';
      document.querySelector('.popup_img img').src = image.getAttribute('src');
   }
})

document.querySelector('.popup_img i').onclick = () => {
   document.querySelector('.popup_img').style.display = 'none';
}

// Testimonial Client Reviews
const clientImgs = document.querySelectorAll('.candidate');
const testimonials = document.querySelectorAll('.testimonials');

clientImgs[0].addEventListener("click", function() {
   clientImgs[0].classList.add('active');
   testimonials[0].classList.add('active');
   testimonials[1].classList.remove('active');
   testimonials[2].classList.remove('active');
   clientImgs[1].classList.remove('active');
   clientImgs[2].classList.remove('active');
});
clientImgs[1].addEventListener("click", function() {
   clientImgs[1].classList.add('active');
   testimonials[1].classList.add('active');
   testimonials[2].classList.remove('active');
   testimonials[0].classList.remove('active');
   clientImgs[2].classList.remove('active');
   clientImgs[0].classList.remove('active');
});
clientImgs[2].addEventListener("click", function() {
   clientImgs[2].classList.add('active');
   testimonials[2].classList.add('active');
   testimonials[0].classList.remove('active');
   testimonials[1].classList.remove('active');
   clientImgs[0].classList.remove('active');
   clientImgs[1].classList.remove('active');
});