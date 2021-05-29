$(document).ready(function(){
// sider js 
 

  $(".project-carosel").owlCarousel({
    items: 3,
    loop:true,
    autoplay: true,
    dots: true,
    nav:false,
    mouseDrag: true,
    touchDrag: true,
    autoplayTimeout:5000,
    center: true,
    smartSpeed:1000,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
        }

      
});

 
  $(".header").sticky(
        {
        topSpacing:0,
        widthFromWrapper:false,
        zIndex:1000
        }
    );
});
// $('.video').magnificPopup({
//   type: 'iframe',
//   delegte: 'a',
//   iframe: {
//   markup: '<div class="mfp-iframe-scaler">'+
//             '<div class="mfp-close"></div>'+
//             '<iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>'+
//           '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

//   patterns: {
//     youtube: {
//       index: 'youtube.com/', 
//       id: 'v=', 

//       src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
//     },

//     // you may add here more sources

//   },

//   srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
// }
// });