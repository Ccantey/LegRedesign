
function closeBanner(){
  if ($('.navbar-nav-collapse').hasClass('show')){
    console.log('close banner called');
    // $('.navbar-nav-collapse').removeClass('notransition');
    $(".navbar-nav-collapse").collapse('hide').removeClass('notransition');
    $('.nav-item').removeClass('active');
  }
}

function changeBanner(event){
  if ($('.navbar-nav-collapse').hasClass('show')){
    // console.log('has show')
    $('.navbar-nav-collapse').addClass('notransition'); //remove transition
    $(".navbar-nav-collapse").collapse('hide'); //hide the previous dropdown
  } 
}

$(document).ready(function () {
  // $('.js-search').hide();
  $('[data-toggle="tooltip"]').tooltip({
    delay: { "show": 100, "hide": 100 }
  });
  $('[data-toggle="popover"]').popover();

  $('.nav-link').click(function(e) {
    $('.nav-item').removeClass('active');
    $('.nav-item a').blur();
    $('.navbar-nav-collapse').removeClass('notransition');
  });

  $(".js-search-btn").click(function(e){
    e.preventDefault();
    $(".js-search").animate({width: 'toggle'});
    // return false
  });

  //switch active class and change banner if already open
  $('.navbar-nav-collapse').on('show.bs.collapse', function () {
    $('.nav-item').removeClass('active');
    var li = $(this).prev();    
    if (li.not('active')){
      // console.log('banner open, need to toggle')
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