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
let dotsBeach = document.getElementById('#surf-slider-dots');

worldMap.addEventListener('click', changeDotsForm);
function changeDotsForm(e) {
  if (e.target.closest('span')) {
    let currentDots = e.target.classList.toggle('dots-beach--active');
    dotsBeach = currentDots;
  }
}

// worldMap.addEventListener('click', changeDotsFormRemove);
// function changeDotsFormRemove(e) {
//   if (e.target.matches('.world-map-wrapper>.dots-beach--active')) {
//     dotsBeach.classList.remove('dots-beach--active');
//   }
// }
