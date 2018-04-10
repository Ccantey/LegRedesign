var temp;

function closeBanner(){
  var _opened = $(".navbar-nav-collapse").hasClass("collapse show");
  if (_opened === true) {
    $(".navbar-nav-collapse").collapse('hide');
  }
}

$(document).ready(function () {
     
  $('[data-toggle="tooltip"]').tooltip()
     
  $('[data-toggle="popover"]').popover()

  // toggle nav-item active state
  $('.navbar-nav-collapse').on('show.bs.collapse', function () {
    $('.nav-item').removeClass('active');
    var li = $(this).prev();
    
    if (li.not('active')){
      li.addClass('active');
    } else {
    }  
  });

  // when navbar-nav-collapse closes
  $('.nav-item').on('click', function(){
    closeBanner()
    if ($(this).hasClass('active')){
      $('.nav-item').removeClass('active');
      $('.nav-item a').blur();
    }
  })

  // hide navbar-nav-collapse when user clicks away from navigation menu
  $(document).click(function (event) {
    closeBanner()
  });

  $('.js-more-accordian').on('shown.bs.collapse', function () {
    var textOption = $(this).attr('data-child');
    $(textOption).html('Fewer Links');
  });
  $('.js-more-accordian').on('hidden.bs.collapse', function () {
    var textOption = $(this).attr('data-child');
    $(textOption).html('More Links');
  });

});