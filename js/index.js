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
