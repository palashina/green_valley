$(document).ready( function() {

$('#gallery-thumbs').owlCarousel({
  items:3,
  loop:true,
  center:true,
  responsive: {
    768: {
      items:4,
    },
    1200: {
      items:5,
    },
  },
});

var mainImgUrl = $('#gallery-start-photo').attr('href');

$('#gallery-main-pict').html('<img src="'+mainImgUrl+'" alt="" />');

$('#gallery-thumbs a').on('click', function(e){
  e.preventDefault();
  var imageUrl = $(this).attr('href');
  $('#gallery-main-pict').html('<img src="'+imageUrl+'" alt="" />');
})

});


/*календарь*/
    // var
    //   from = $( "#calendar-start" ).datepicker()
    //     .on( "change", function() {
    //       to.datepicker( "option", "minDate", getDate( this ) );
    //       var date = $(this).datepicker('getDate');
    //       $( "#start-day" ).text( date.getDate() );
    //       $( "#start-month" ).text( date.getMonth() + 1 );
    //       $( "#start-year" ).text( date.getFullYear() );
    //     }),
    //   to = $( "#calendar-fin" ).datepicker()
    //     .on( "change", function() {
    //       from.datepicker( "option", "maxDate", getDate( this ) );
    //       var date = $(this).datepicker('getDate');
    //       $( "#fin-day" ).text( date.getDate() );
    //       $( "#fin-month" ).text( date.getMonth() + 1 );
    //       $( "#fin-year" ).text( date.getFullYear() );
    //     });

    // function getDate( element ) {
    //   var date;
    //   try {
    //     date = $.datepicker.parseDate( "mm/dd/yy", element.value );
    //   } catch( error ) {
    //     date = null;
    //   }

    //   return date;
    // }
  // });