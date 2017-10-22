
$(document).ready(function(){
    $('.img-container').slick({
      autoplay: true,
      centerMode: true,
      centerPadding: '60px',
      initialSlide: 1,
      slidesToShow: 3,
        arrows: false,
      lazyLoad: 'ondemand',
        infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});

var lethargy = new Lethargy(); // Use defaults
$(window).bind('mousewheel DOMMouseScroll wheel MozMousePixelScroll', function(e){
    e.preventDefault()
    e.stopPropagation();
    if(lethargy.check(e) !== false) {
        // Do something with the scroll event
    }
});