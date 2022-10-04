if(document.documentElement.clientWidth < 993) {
  let containerCarousel = document.querySelector('[data-box-carousel]');
  let boxCarouselItens  = document.createElement('div');
  let itensCarousel     = document.querySelectorAll('[data-item-carousel]');

  containerCarousel.setAttribute('data-ride', 'carousel');
  containerCarousel.setAttribute('id', 'carouselExampleSlidesOnly');
  containerCarousel.setAttribute('data-reload', false);
  containerCarousel.classList.add('carousel');
  containerCarousel.classList.add('slide');

  // ADICIONA OS ITENS DO SLIDER
  boxCarouselItens.classList.add('carousel-inner');
  itensCarousel.forEach((item, index) => {
    item.classList.add('carousel-item');

    if(index === 0) item.classList.add('active');

    boxCarouselItens.appendChild(item);
  });

  // ADICIONA CONTAINER DO SLIDER
  containerCarousel.appendChild(boxCarouselItens);

  $(containerCarousel).carousel();
}


// VITRINES
let vitrines = document.querySelectorAll('[data-slider-vitrine]');

vitrines.forEach(vitrine => {
  $(vitrine).slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
});

// ALBUNS
if(document.documentElement.clientWidth < 768) {
  $('[data-album]').slick();
}