
jQuery(document).ready(function(){
    
    /*jQuery('.banner_main .switch_button a').click(function(e){
      jQuery('.banner_main .switch_button a span').toggleClass('active disabled');
      e.preventDefault()
    });*/

    jQuery('.btn-tooltip').append("<span></span>");
    //jQuery('.tooltips:not([tooltip-position])').attr('tooltip-position','bottom');


    jQuery(".btn-tooltip").mouseenter(function(){
     jQuery(".btn-tooltip").find('span').empty().append(jQuery(this).attr('tooltip'));
    });    

    jQuery('.vacation_slideshow').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      fade: true,
      draggable: false,
      swipe: false,
      autoplay: false,
      speed: 1000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      autoplaySpeed: 2000
    });

    jQuery(".our_rooms_sec .sec_title h2 a").click(function(e){
      jQuery(".images_slideshow").slick("refresh");
      jQuery(this).parents('.our_rooms_sec .sec_title').toggleClass('open');      
      jQuery(".our_rooms_sec .rooms_content").slideToggle();
      e.preventDefault()
    });

    jQuery('.images_slideshow').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      draggable: false,
      swipe: false,
      autoplay: false,
      speed: 1000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    jQuery('.gallery_box').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        /*titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }*/
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });
});

