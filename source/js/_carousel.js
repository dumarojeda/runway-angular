function carouselMain(classCarousel) {
  $(classCarousel).slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    dots: true,
    prevArrow: '<div class="slick-prev icon-arrow-left"></div>',
    nextArrow: '<div class="slick-next icon-arrow-right"></div>'
  });
}