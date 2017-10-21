
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

$(document).alton({
    firstClass: 'background',
    singleSlideClass: 'slide', // Tell Alton the full height slide class
    useSlideNumbers: true, // Set to false if you don't want to use pagination
    slideNumbersBorderColor: '#fff', // Set the outside color of the pagination items
    slideNumbersColor: 'transparent', // Set the inner color of the pagination items
    bodyContainer: 'pageWrapper', // Tell Alton the body class
});



