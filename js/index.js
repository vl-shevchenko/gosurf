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
    prevArrow:
      '<img class="arrow-slider arrow-prev" src="images/arrow-right.svg" alt="" />',
    nextArrow:
      '<img class="arrow-slider arrow-next" src="images/arrow-right.svg" alt="" />',
    // centerMode: true,
    // variableWidth: true, //дозволяє робити задану ширину слайду
  });
});

//weather
// const lat = 58.7984;
// const lng = 17.8081;
// const params = 'waveHeight,waterTemperature,windSpeed';

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
