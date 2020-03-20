if ( window.matchMedia( "(max-width: 992px)" ).matches ) {
  $( '.sidenav' ).sidenav({
    edge: 'right',
    onOpenStart: function() {
      $( '#slide-out' ).addClass( 'i-open' );
    },
    onCloseStart: function() {
      $( '#slide-out' ).removeClass( 'i-open' );
    }
  });
}

setTimeout( function() {
  $( 'body' ).addClass( 'i-page-loaded' );
}, 0 );

$( '.b-ajax-block' ).each( function() {
  
  var $ajaxBlock = $( this );
  
  $.ajax({
    url: $ajaxBlock.data( 'url' ),
    type: $ajaxBlock.data( 'method' ),//GET
    dataType: "html",
    success: function( html ) {
      $ajaxBlock.html( html);
    },
    error: function( a, b, c ) {
      if( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
});