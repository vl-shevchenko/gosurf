//swiper
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 4,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
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

//mobile menu
const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');

burger.addEventListener('click', burgerHandler);
function burgerHandler(e) {
  popup.classList.toggle('open');
  burger.classList.toggle('active');
  burger.parentElement.classList.toggle('active');
}
popup.addEventListener('click', burgerClose);
function burgerClose(e) {
  if (e.target.closest('.nav-bar__item')) {
    popup.classList.remove('open');
    burger.classList.remove('active');
    burger.parentElement.classList.remove('active');
  }
}

//dots beach info
const worldMap = document.querySelector('.world-map-wrapper');
const dotsBeach = document.querySelectorAll('span.dots-beach');

worldMap.addEventListener('click', changeDotsForm);
// for (let i = 0; i < dotsBeach.length; i++) {
//   dotsBeach[i].addEventListener('click', changeDotsForm);
// }
function changeDotsForm(e) {
  let dotsCurrent = e.target;

  for (let i = 0; i < dotsBeach.length; i++) {
    if (dotsBeach[i].classList.contains('active')) {
      if (dotsBeach[i].firstChild) {
        dotsBeach[i].innerHTML = '';
      }
      dotsBeach[i].classList.remove('active');
    } else if (e.target.closest('span')) {
      dotsCurrent.classList.add('active');
      dotsCurrent.innerHTML = `<div class="dots-beach-wrapper" id="dots-beach-wrapper"></div>`;

      document.getElementById('dots-beach-wrapper').innerHTML = `
            <div class="dots-beach-info__wrapper">
              <a class="dots-beach-info__location-name" href="#">Airlie Beach</a>
              <p class="dots-beach-info__location-city">Australia</p>
              <div class="dots-beach-info__weather">
                <p class="dots-beach-info__weather-wave">9 - 13</p>
                <p class="dots-beach-info__weather-water">+2.3</p>
                <p class="dots-beach-info__weather-wind">4 SE</p>
              </div>
            </div>
      `;
    }
  }
}
// function changeDotsForm(e) {
//   let dotsCurrent = e.target;

//   for (let i = 0; i < dotsBeach.length; i++) {
//     if (dotsBeach[i].classList.contains('active')) {
//       if (dotsBeach[i].firstChild) {
//         dotsBeach[i].innerHTML = '';
//       }
//       dotsBeach[i].classList.remove('active');
//     } else if (e.target.closest('span')) {
//       dotsCurrent.classList.add('active');
//       dotsCurrent.innerHTML = `<div class="dots-beach-wrapper" id="dots-beach-wrapper"></div>`;

//       document.getElementById('dots-beach-wrapper').innerHTML = `
//             <div class="dots-beach-info__wrapper">
//               <a class="dots-beach-info__location-name" href="#">Airlie Beach</a>
//               <p class="dots-beach-info__location-city">Australia</p>
//               <div class="dots-beach-info__weather">
//                 <p class="dots-beach-info__weather-wave">9 - 13</p>
//                 <p class="dots-beach-info__weather-water">+2.3</p>
//                 <p class="dots-beach-info__weather-wind">4 SE</p>
//               </div>
//             </div>
//       `;
//     }
//   }
// }

var swiperSurf = new Swiper('.mySwiper-surf', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  // freeMode: true,
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
  breakpoints: {
    280: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    555: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    820: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    },
    1260: {
      slidesPerView: 4.3,
      spaceBetween: 10,
    },
  },
});

const shopDots = document.querySelectorAll('span.shop__dots');
const shopDotsArgument = document.querySelectorAll('p.shop__dots-argument');

for (let i = 0; i < shopDots.length; i++) {
  shopDots[i].addEventListener('click', showDotsArgument);
}

function showDotsArgument(e) {
  e.target.parentElement.classList.toggle('active');
}

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
