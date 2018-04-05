var temp;
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
    if ($(this).hasClass('active')){
      $('.nav-item').removeClass('active');
      $('.nav-item a').blur();
    }
  })

  // hide dropdown off focus
  // $(document).click(function (event) {
  //   var clickover = $(event.target);
  //   // console.log(clickover.parents());
  //   var _opened = $(".collapse").hasClass("collapse show");
  //   $(".collapse").collapse('hide');
  //   if (_opened === true && !clickover.hasClass("dropdown-toggle")) {
  //       console.log('true')
  //       $(".collapse").collapse('hide');
  //   }
  // });

  $('.moreAccordion').on('shown.bs.collapse', function () {
    var textOption = $(this).attr('data-child');
    $(textOption).html('Fewer Links');
  });
  $('.moreAccordion').on('hidden.bs.collapse', function () {
    var textOption = $(this).attr('data-child');
    $(textOption).html('More Links');
  });

});