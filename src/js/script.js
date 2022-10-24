const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 2000,
    nav: false,
    controls: false
  });

document.querySelector('.next').onclick = function () {
slider.goTo('next');
};

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
    };