const beaches = [
  {
    pos: 1,
    country: 'usa',
    district: 'hawaii',
    beach: 'hanalei beach',
    id: 'hanalei-beach',
    coordinates: {
      lat: 22.209078,
      lng: -159.506758,
    },
  },
  {
    pos: 2,
    country: 'usa',
    district: 'california',
    beach: 'malibu beach',
    id: 'malibu-beach',
    coordinates: {
      lat: 34.031246,
      lng: -118.788193,
    },
  },
  {
    pos: 3,
    country: 'usa',
    district: 'florida',
    beach: 'cocoa beach',
    id: 'cocoa-beach',
    coordinates: {
      lat: 28.320007,
      lng: -80.607552,
    },
  },
  {
    pos: 4,
    country: 'brazil',
    district: 'rio de janeiro',
    beach: 'copacabana beach',
    id: 'copacabana-beach',
    coordinates: {
      lat: -22.970722,
      lng: -43.182365,
    },
  },
  {
    pos: 5,
    country: 'france',
    district: 'hossegor',
    beach: 'vieux boucau',
    id: 'vieux-boucau',
    coordinates: {
      lat: 43.785811,
      lng: -1.400962,
    },
  },
  {
    pos: 6,
    country: 'south africa',
    district: 'sarah baartman',
    beach: 'jeffreys bay beach',
    id: 'jeffreys-bay-beach',
    coordinates: {
      lat: -34.033333,
      lng: 24.916668,
    },
  },
  {
    pos: 7,
    country: 'sri lanka',
    district: 'galle',
    beach: 'hikkaduwa beach',
    id: 'hikkaduwa-beach',
    coordinates: {
      lat: 6.139468,
      lng: 80.106285,
    },
  },
  {
    pos: 8,
    country: 'australia',
    district: 'queensland',
    beach: 'airlie beach',
    id: 'airlie-beach',
    coordinates: {
      lat: -20.2675,
      lng: 148.716949,
    },
  },
];

//swiper header
let swiper = new Swiper('.mySwiper', {
  spaceBetween: 4,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper('.mySwiper2', {
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

//swiper surf
let swiperSurf = new Swiper('.mySwiper-surf', {
  slidesPerView: 1.2,
  spaceBetween: 10,
  loop: true,
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

//swiper travel
let swiperTravel = new Swiper('.mySwiper-travel', {
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
});

//swiper sleep
let swiperSleep = new Swiper('.mySwiper-sleep', {
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
const dotsBeachMobileInfoWeather = document.querySelector('.dots-beach-mobile-info__weather');
const dotsBeachMobileInfoWeatherWave = document.querySelector('.dots-beach-mobile-info__weather-wave');
const dotsBeachMobileInfoWeatherWater = document.querySelector('.dots-beach-mobile-info__weather-water');
const dotsBeachMobileInfoWeatherWind = document.querySelector('.dots-beach-mobile-info__weather-wind');

// worldMap.addEventListener('click', changeDotsForm);
for (let i = 0; i < dotsBeach.length; i++) {
  dotsBeach[i].addEventListener('click', getInfoBeach);
}

function getInfoBeach(e) {
  let dotsCurrent = e.target;
  for (let i = 0; i < dotsBeach.length; i++) {
    if (dotsBeach[i].classList.contains('active')) {
      if (dotsBeach[i].firstChild) {
        dotsBeach[i].innerHTML = '';
        console.log('have firstChild and inner ""');
      }
      dotsBeach[i].classList.remove('active');
      console.log('removed the previous classList "active"');
    }
  }
  e.target.classList.add('active');
  console.log('add classList "active"');

  //combining a dotsBeach with an beaches
  for (let i = 0; i < beaches.length; i++) {
    if (beaches[i].id == e.target.id) {
      let country = beaches[i].country;
      let district = beaches[i].district;
      let beach = beaches[i].beach;
      let lat = beaches[i].coordinates.lat;
      let lng = beaches[i].coordinates.lng;
      console.log(beach);
      dotsCurrent.innerHTML = `<div class="dots-beach-wrapper" id="dots-beach-wrapper"></div>`;
      document.getElementById('dots-beach-wrapper').innerHTML = `
      <div class="dots-beach-info__wrapper">
        <a class="dots-beach-info__location-name" href="#">${beach}</a>
        <p class="dots-beach-info__location-city">${district}</p>
        <div class="dots-beach-info__weather">
          <p class="dots-beach-info__weather-wave"></p>
          <p class="dots-beach-info__weather-water"></p>
          <p class="dots-beach-info__weather-wind"></p>
        </div>
      </div>
      `;
      const dotsBeachInfoWeatherWave = document.querySelector('.dots-beach-info__weather-wave');
      const dotsBeachInfoWeatherWater = document.querySelector('.dots-beach-info__weather-water');
      const dotsBeachInfoWeatherWind = document.querySelector('.dots-beach-info__weather-wind');

      //weather api
      const params = 'waveHeight,waterTemperature,windSpeed';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4f03edbfffmsh7a6729e58896fe1p1c6f3fjsn31c9794bdc89',
          'X-RapidAPI-Host': 'stormglass.p.rapidapi.com',
        },
      };

      let store = {
        hours: [],
      };
      const fetchData = async () => {
        const result = await fetch(
          `https://stormglass.p.rapidapi.com/forecast?lat=${lat}&lng=${lng}&params=${params}`,
          options
        );
        const data = await result.json();
        const {
          hours: [],
        } = data;
        console.log(data);

        store = {
          ...store,
          hours: data.hours,
        };
        console.log(store);

        dotsBeachInfoWeatherWave.innerHTML = `${store.hours[203].waveHeight[0].value}`;
        dotsBeachInfoWeatherWater.innerHTML = `${store.hours[203].waterTemperature[0].value}`;
        dotsBeachInfoWeatherWind.innerHTML = `${store.hours[203].windSpeed[0].value} SE`;

        dotsBeachMobileInfoWeatherWave.innerHTML = `${store.hours[203].waveHeight[0].value}`;
        dotsBeachMobileInfoWeatherWater.innerHTML = `${store.hours[203].waterTemperature[0].value}`;
        dotsBeachMobileInfoWeatherWind.innerHTML = `${store.hours[203].windSpeed[0].value} SE`;
      };
      fetchData();

      const surfTitleDistrict = document.getElementById('surf-title-district');
      const surfTitleCountry = document.getElementById('surf-title-country');
      const dotsBeachMobileInfoLocationName = document.querySelector('.dots-beach-mobile-info__location-name');
      const dotsBeachMobileInfoLocationCity = document.querySelector('.dots-beach-mobile-info__location-city');
      surfTitleDistrict.innerHTML = `${district}`;
      surfTitleCountry.innerHTML = `${country}`;
      dotsBeachMobileInfoLocationName.innerHTML = `${beach}`;
      dotsBeachMobileInfoLocationCity.innerHTML = `${district}`;
      // console.log(beach);
      const coordinatesBeachLat = document.getElementById('coordinates-beach-lat');
      const coordinatesBeachLng = document.getElementById('coordinates-beach-lng');

      coordinatesBeachLat.innerHTML = `${lat}&degN`;
      coordinatesBeachLng.innerHTML = `${lng}&degW`;
    }
  }
}

const shopDots = document.querySelectorAll('span.shop__dots');
const shopDotsArgument = document.querySelectorAll('p.shop__dots-argument');

for (let i = 0; i < shopDots.length; i++) {
  shopDots[i].addEventListener('click', showDotsArgument);
}

function showDotsArgument(e) {
  e.target.parentElement.classList.toggle('active');
}

//close all dotsForm
worldMap.addEventListener('click', closeDotsForm);
function closeDotsForm(e) {
  for (let i = 0; i < dotsBeach.length; i++) {
    if (e.target.matches('span')) {
      console.log('it is span');
    } else {
      dotsBeach[i].classList.remove('active');
      dotsBeach[i].innerHTML = '';
      console.log('close all');
    }
  }
}

//calculator for sleep
const sliderCalculatorNights = document.getElementById('slider-calculator-nights');
const sliderCalculatorGuests = document.getElementById('slider-calculator-guests');
const sliderCalculatorBtnMinus = document.querySelector('.slider-calculator__minus');
const sliderCalculatorBtnPlus = document.querySelector('.slider-calculator__plus');
const sliderNights = document.getElementById('slider-nights');
const sliderGuests = document.getElementById('slider-guests');
const resultSleep = document.getElementById('result-sleep');

sliderCalculatorNights.addEventListener('click', countNigts);
function countNigts(e) {
  sliderCalculatorBtnPlus;
  if (e.target.matches('span.slider-calculator__plus')) {
    sliderNights.value = parseInt(sliderNights.value) + 1;
    console.log('plus night');
  } else if (e.target.matches('span.slider-calculator__minus')) {
    sliderNights.value = parseInt(sliderNights.value) - 1;
    console.log('minus night');
  }
  calculatorSleep();
}

sliderCalculatorGuests.addEventListener('click', countGuests);
function countGuests(e) {
  sliderCalculatorBtnPlus;
  if (e.target.matches('span.slider-calculator__plus')) {
    sliderGuests.value = parseInt(sliderGuests.value) + 1;
    console.log('plus guest');
  } else if (e.target.matches('span.slider-calculator__minus')) {
    sliderGuests.value = parseInt(sliderGuests.value) - 1;
    console.log('minus guest');
  }
  calculatorSleep();
}

function calculatorSleep() {
  const result =
    Number(sliderNights.value) * Number(resultSleep.dataset.night) +
    Number(sliderGuests.value) * Number(resultSleep.dataset.guest);
  resultSleep.innerHTML = `${result}`;
}
