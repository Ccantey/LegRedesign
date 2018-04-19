var temp;

function closeBanner(){
  console.log('close banner called');
  $('.navbar-nav-collapse').removeClass('notransition');
  var _opened = $(".navbar-nav-collapse").hasClass("show");
  // if (_opened === true) {

    $(".navbar-nav-collapse").collapse('hide');
    $('.nav-item').removeClass('active');
    $('.nav-item a').blur();
  // }
}

function changeBanner(event){
  if (event.hasClass('active')){
    console.log('is active, should close smooth');
    $('.navbar-nav-collapse').removeClass('notransition');
    closeBanner()
  }
  if ($('.navbar-nav-collapse').hasClass('show')){
    console.log('has show - no transition - no open');
    $('.navbar-nav-collapse').addClass('notransition');
  } else {
    console.log('no show - open')
    $('.navbar-nav-collapse').removeClass('notransition');
  }
  // $(".navbar-nav-collapse").collapse({
  //   toggle:false
  // });
  // var _opened = $(".navbar-nav-collapse").hasClass("show");
  // if (_opened === true) {

  // } else {

  // }
}

$(document).ready(function () {
     
  $('[data-toggle="tooltip"]').tooltip()
     
  $('[data-toggle="popover"]').popover()

  // toggle nav-item active state
  $('.navbar-nav-collapse').on('show.bs.collapse', function () {
    $('.nav-item').removeClass('active');
    var li = $(this).prev();
    
    if (li.not('active')){
      changeBanner($(this))
      li.addClass('active');
    } 
  });

  // hide navbar-nav-collapse when user clicks away from navigation menu
  $(document).click(function (e) {
    var target = $(e.target);
    if (!target.hasClass('nav-link')){
      closeBanner();
    }
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