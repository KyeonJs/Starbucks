// 검색창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach (function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1
  });
});

// 공지사항
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// 프로모션
new Swiper('.promotion .swiper-containers', {
  autoplay: {
    delay: 3000
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

//프로모션 토글
const promotionEl = document.querySelector('.promotion')

const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.remove('hide')
  } else {
    promotionEl.classList.add('hide')
  }
})


const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .9
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


const wrapperEls = document.querySelectorAll('.reserve-coffee .fade-in');

wrapperEls.forEach (function (wrapperEl, index) {
  gsap.to(wrapperEl, 1, {
    delay: .3,
    opacity: 1
  });
});


const reserveEls = document.querySelectorAll('.reserve-store .fade-in');

reserveEls.forEach (function (reserveEl, index) {
  gsap.to(reserveEl, 1, {
    delay: .4,
    opacity: 1
  });
});

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()



