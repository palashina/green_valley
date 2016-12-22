$(document).ready( function() {

/*главная: гамбургер*/

$('.main-nav__toggler-link').click(function(e) {
  e.preventDefault();
  $('.main-nav__nav').toggle();
});

/*главная: табы в промо-блоке*/

var tabs = document.querySelectorAll('.rest-type-switcher__tabs .rest-type-switcher__tab-item a');
var restType = document.querySelectorAll('.rest-type-switcher__type .rest-type-switcher__type-item');

function changeTab(event) {
  event.preventDefault();
  for (var i=0; i<tabs.length; i++) {
    tabs[i].parentNode.classList.remove('rest-type-switcher__is-active');
  }
  event.target.parentNode.classList.add('rest-type-switcher__is-active');
  for (var i=0; i<tabs.length; i++) {
    restType[i].classList.remove('rest-type-switcher__is-active');
  }

var link = event.target.getAttribute('href');
document.querySelector(link).classList.add('rest-type-switcher__is-active');
}

for (var i=0; i<tabs.length; i++) {
  tabs[i].addEventListener('click', changeTab);
};

/*главная: галерея*/

$('#gallery-thumbs').owlCarousel({
  items: 6,
  loop: true,
  center: true,
  autoPlay:3000,
  margin: 0,
  // responsive: {
  //   0: {
  //     items: 1,
  //     center: true
  //   },
  //   768: {
  //     items: 7,
  //     center: true
  //   }
  // }
});

var mainImgUrl = $('#gallery-start-photo').attr('href');

$('#gallery-main-pict').html('<img src="'+mainImgUrl+'" alt="" />');

$('#gallery-thumbs a').on('click', function(e){
  e.preventDefault();
  var imageUrl = $(this).attr('href');
  $('#gallery-main-pict').html('<img src="'+imageUrl+'" alt="" />');
});

/*главная: отзывы, раскрывающийся список*/

$('#all-reviews').click(function(e) {
  e.preventDefault();
  $('.reviews__toggle-items').slideToggle(800);
});

/*календарь*/
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
});


