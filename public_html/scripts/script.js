// слайдер секции Slider
 $(function(){
    $('#benO,#benT,#benTH').click(function(e){
        e.preventDefault();
        $(this)
            .addClass('active')
            .siblings('a')
            .removeClass('active');
        $('div.'+$(this).attr('href'))
            .show()
            .siblings('div')
            .hide();
    });
});


//Главный слайдер


$ (function(){
   var slider = $('#slider').bxSlider({
     mode: 'fade',
     speed: 500,
     startSlide: 2,
     arrows:true,
     auto: false,
     responsive:true,
     pause:2000,
     autoHover:false,
     maxSlides:1,
    
     adaptiveHeight:true,
     minSlides:1


      });
   
      if ($(window).width()<769 ) {
    slider.reloadSlider({

       adaptiveHeight:false,
         responsive:true,
         startSlide:2,
      maxSlides: 1,
       speed:500,
      minSlides:1,
      moveSlides:1
    });
    }  else if ($(window).width()<321 ) {
    slider.reloadSlider({

       adaptiveHeight:false,
         responsive:true,
         startSlide:2,
      maxSlides: 1,
       speed:500,
      minSlides:1,
      moveSlides:1
    });
  }
});  
//слайдер карусель
 $(document).ready(function(){
  sliderResize();
});

$(window).resize(function(){
  sliderResize();
});

function sliderResize() {
  var slider = $('.benefits-item-slider').bxSlider({
    slideWidth:195,
    speed:500,
    minSlides:1,
    maxSlides: 6,
         responsive:true,
    moveSlides: 1
    
  
  });

  if ($(window).width()<1024 && $(window).width()>770) {
    slider.reloadSlider({
      slideWidth:185,
      maxSlides: 5,
       speed:500,
      minSlides:1,
      responsive:true,
      moveSlides:1
    });
  } else if ($(window).width()<769 && $(window).width()>641) {
    slider.reloadSlider({
      slideWidth:155,
      
      maxSlides: 6,
       speed:500,
      minSlides:6,
           responsive:true,
           
      moveSlides:1
    });
  } else if ($(window).width()<640 && $(window).width()>321) {
    slider.reloadSlider({
     slideWidth: 180,
     speed:500,
     maxSlides: 3,
          responsive:true,
     minSlides:3,
     moveSlides:1
    });
  } else if ($(window).width()<320) {
    slider.reloadSlider({
      speed:500,
      slideWidth: 155,
      maxSlides: 6,
        arrows:false,
             responsive:true,
        controls:false,
      minSlides:1,
      moveSlides:1
    });
  }
}
//слайдер-карусель при минимальной ширине Social instagram
if ($(window).width()< 321){
  $('.social-instagram-icons').bxSlider({
    slideWidth:135,
    minSlides: 1,
    speed:500,
    startSlides:5,
    arrows:false,
    controls:false,
    maxSlides: 5,
    dots:false,
    moveSlides:1
  });
}
//слайдер-карусель при минимальной ширине Famous Benefits
if ($(window).width()< 321){
  $('.social-famous-icons').bxSlider({
    slideWidth:170,
    minSlides: 1,
    speed:500,
       arrows:false,
    controls:false,
      dots:false,
    maxSlides: 4
  });
}