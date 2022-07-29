

const int = document.querySelectorAll('.first');

int.forEach(item => {
   t(item);
});
function t ( selector) {
   let n = 0;
   let num = +selector.innerHTML;
   let interval = setInterval(() => {
    n = n + 1;
    if (n === num) {
        clearInterval(interval);
    }
    selector.innerHTML = `${n}+`;
   },40);
}

//cards

// const observer = new IntersectionObserver(entries => {
//    entries.forEach( entry => {
//       const targ = entry.target.querySelector('.logo_secondary');
//       if (entry.isIntersecting) {
//          targ.style.animation='test 2s 1';
//          return;
//       }
//       targ.style.animation ='';
//    });
// });

// observer.observe(document.querySelector('.content_block_2'));


const slides = document.querySelectorAll('.slide_elem1'),
      slidesWrapper = document.querySelector('.slide_elem_wrapper'),
      width = window.getComputedStyle(slidesWrapper).width,
      slidesField = document.querySelector('.slider_wrapper'),
      next = document.querySelector('.next'),
      prev = document.querySelector('.prev');
let slideIndex =1;
let offset = 0;
console.log(width);

slides.forEach(slide => {
   slide.style.width = width;
});


function clearItems(item) {
   return +item.replace(/\D/g, '') ;
}


next.addEventListener('click', () => {
   if (offset == clearItems(width) * (slides.length - 1)) {
      offset = 0;
      
   } else {
      offset += clearItems(width);
   }
   slidesField.style.transform = `translate(-${offset}px)`;


   if (slideIndex == slides.length) {
      slideIndex =1;
   } else {
      slideIndex ++;
   }
});


prev.addEventListener('click', () => {
   if ( offset == 0) {
      offset = clearItems(width) * (slides.length - 1);
   } else {
      offset -= clearItems(width);
   }
   slidesField.style.transform = `translate(-${offset}px)`;


   if (slideIndex ==1) {
      slideIndex = slides.length;
   } else {
      slideIndex --;
   }
});

// burger 
const burgerBtn = document.querySelector('.header-burger'),
      navMenu = document.querySelector('.nav_menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('activeBurger')
    navMenu.classList.toggle('activeBurger')
})     