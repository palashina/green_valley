$(document).ready( function() {
    var
      from = $( "#calendar-start" ).datepicker()
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          var date = $(this).datepicker('getDate');
          $( "#start-day" ).text( date.getDate() );
          $( "#start-month" ).text( date.getMonth() + 1 );
          $( "#start-year" ).text( date.getFullYear() );
        }),
      to = $( "#calendar-fin" ).datepicker()
        .on( "change", function() {
          from.datepicker( "option", "maxDate", getDate( this ) );
          var date = $(this).datepicker('getDate');
          $( "#fin-day" ).text( date.getDate() );
          $( "#fin-month" ).text( date.getMonth() + 1 );
          $( "#fin-year" ).text( date.getFullYear() );
        });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( "mm/dd/yy", element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  } );