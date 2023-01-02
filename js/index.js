// slick slider
$(document).ready(function () {
  $('.header__slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow:
      '<img class="arrow-slider arrow-prev" src="images/arrow-right.svg" alt="" />',
    nextArrow:
      '<img class="arrow-slider arrow-next" src="images/arrow-right.svg" alt="" />',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    rows: 1,
    variableWidth: true,
  });

  $('.surf-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 0,
    prevArrow:
      '<img class="arrow-slider arrow-prev" src="images/arrow-right.svg" alt="" />',
    nextArrow:
      '<img class="arrow-slider arrow-next" src="images/arrow-right.svg" alt="" />',
    // centerMode: true,
    // variableWidth: true, //дозволяє робити задану ширину слайду
  });
  $('.travel-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow:
      '<img class="arrow-slider arrow-prev" src="images/arrow-right.svg" alt="" />',
    nextArrow:
      '<img class="arrow-slider arrow-next" src="images/arrow-right.svg" alt="" />',
  });
});

//swiper
var swiper = new Swiper('.mySwiper', {
  // loop: true,
  spaceBetween: 4,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: 4,
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

//weather

// fetch(
//   `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
//   {
//     headers: {
//       Authorization:
//         '08b5570a-5385-11ed-a654-0242ac130002-08b55782-5385-11ed-a654-0242ac130002',
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((jsonData) => {
//     // Do something with response data.
//     console.log(jsonData);
//   });

//===================================================================================
// const lat = 25.793449;
// const lng = -80.139198;
// const params = 'waveHeight,waterTemperature,windSpeed';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '4f03edbfffmsh7a6729e58896fe1p1c6f3fjsn31c9794bdc89',
//     'X-RapidAPI-Host': 'stormglass.p.rapidapi.com',
//   },
// };

// fetch(
//   `https://stormglass.p.rapidapi.com/forecast?lat=${lat}&lng=${lng}&params=${params}`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

//===================================================================================

const worldMap = document.querySelector('.world-map-wrapper');
let dotsBeach = document.querySelectorAll('span.dots-beach');

let dotsMalibu = document.getElementById('dots-malibu');
let dotsAirlie = document.getElementById('dots-airlie');
let dotsCloud = document.getElementById('dots-cloud');
let dotsVieux = document.getElementById('dots-vieux');
let dots1 = document.getElementById('dots-1');
let dots2 = document.getElementById('dots-2');
let dots3 = document.getElementById('dots-3');
let dots4 = document.getElementById('dots-4');

let shopWrapperImage = document.getElementById('shop-wrapper-image');
let burgerDots = document.querySelectorAll(
  'div.shop-wrapper-image__dots-details'
);
let shopInfo = document.querySelector('shop-info');
// for (let i = 0; i < burgerDots.length; i++) {
//   burgerDots[i].addEventListener('click', shopDetails);
// }

//crutch2
shopWrapperImage.addEventListener('click', shopDetails);

function shopDetails(e) {
  let dotsCurrent = e.target;
  if (e.target.closest('div.shop-wrapper-image__dots-details')) {
    for (let i = 0; i < burgerDots.length; i++) {
      dotsCurrent.classList.toggle('active');
      dotsCurrent.classList.toggle('open');
    }
  }
}

for (let i = 0; i < dotsBeach.length; i++) {
  console.log(dotsBeach[i].classList);
}

worldMap.addEventListener('click', changeDotsForm);
// for (let i = 0; i < dotsBeach.length; i++) {
//   dotsBeach[i].addEventListener('click', changeDotsForm);
// }
function changeDotsForm(e) {
  let dotsCurrent = e.target;
  // let dotsBeachWrapper = document.getElementById('dots-beach-wrapper');

  // if (e.target.matches('span')) {
  //   dotsCurrent.innerHTML = `<div class="dots-beach-wrapper" id="dots-beach-wrapper"></div>`;
  //   // let dotsBeachWrapper = document.getElementById('dots-beach-wrapper');
  //   // dotsCurrent.appendChild(dotsBeachWrapper);
  // }
  //потрібно зробити так, щоб div b spam був тільки один. попередні створені потрібно видаляти
  // for (let i = 0; i < dotsBeach.length; i++) {
  //   if (document.getElementById('dots-beach-wrapper') > 1) {
  //     dotsBeach[i].innerHTML = '';
  //   }
  // }
  // document.getElementById('dots-beach-wrapper').innerHTML = '';
  for (let i = 0; i < dotsBeach.length; i++) {
    if (dotsBeach[i].classList.contains('dots-beach--active')) {
      // dotsCurrent.classList.remove('dots-beach--active');
      if (dotsBeach[i].firstChild) {
        dotsBeach[i].innerHTML = '';
      }
      dotsBeach[i].classList.remove('dots-beach--active');
      // dotsBeach[i].removeChild(document.getElementById('dots-beach-wrapper'));
    } else if (e.target.closest('span')) {
      dotsCurrent.classList.add('dots-beach--active');
      dotsCurrent.innerHTML = `<div class="dots-beach-wrapper" id="dots-beach-wrapper"></div>`;

      document.getElementById('dots-beach-wrapper').innerHTML = `
            <div class="beach-info">
                <div class="beach-info-wrapper">
                  <a class="beach-info__location-name" href="#">Airlie Beach</a>
                  <p class="beach-info__location-city">Australia</p>

                  <div class="beach-info__weather">
                    <p class="beach-info__weather-wave">9 - 13</p>
                    <p class="beach-info__weather-water">+2.3</p>
                    <p class="beach-info__weather-wind">4 SE</p>
                  </div>
                </div>
              </div>
      `;
    }
  }
}
