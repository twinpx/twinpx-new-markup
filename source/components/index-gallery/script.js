( function($) {

  'use strict';
  
  $( function() {
    
    //set i-loaded
    $( '.b-index-gallery__text-block' ).addClass( 'i-loaded' );
    
    //init swiper gallery
    var swiper = new Swiper('.b-index-gallery .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function() {
          setTimeout( function() {
            $( '.b-ph-gallery, .b-index-gallery' ).addClass( 'i-initialized' );
          }, 500);
        },
        slideChange: function() {
          var activeSlide = swiper.slides[ swiper.activeIndex ];
          var $activeText = $( activeSlide ).find( '.b-index-gallery__text' );
          
          var dataText = [ $activeText.find( '.b-h1' ).text(), $activeText.find( '.b-h2' ).text(), $activeText.find( 'p' ).text() ];
          
          $( '#indexGalleryText .b-h1, #indexGalleryText .b-h2, #indexGalleryText p' ).empty();
          
          typingText( '.b-h1', 50 );
          typingText( '.b-h2', 30 );
          typingText( 'p', 10 );
          
          function typingText( elem, time ) {
            var text = $activeText.find( elem ).text(),
                index = 0;
                
            var h1TimerId = setInterval( function() {                  
              if ( index < text.length ) {
                $( '#indexGalleryText ' + elem ).html( text.substring(0, ++index) + '<span aria-hidden="true"></span>' );
              } else {
                clearTimeout( h1TimerId );
              }
            }, time );
          }
      
        }
      },
      loop: true
    });
    
      
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));