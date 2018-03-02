var temp;
$(document).ready(function () {
     
  $('[data-toggle="tooltip"]').tooltip()
     
  $('[data-toggle="popover"]').popover()

/*
//fiddling with navigation collapse crap
  $('.nav-item').hover(function(event){
    $(".collapse").collapse('hide');
    $('.nav-item').removeClass('active');
    if ($(this).not('active')){
        temp=$(this).children().attr('aria-controls');
        console.log(temp)
      

        $('#'+temp).collapse('show');
        $(this).addClass('active')
    } else {        
    }       
  });
  
  $('#'+temp).hover(function(){
    $('#'+temp).collapse('show');
  }, function(){
    $('#'+temp).collapse('hide');
  })
*/

 $('.navbar-dark .nav-item').click(function(event){

        if ($(this).hasClass('active')){
            
        } else {
            $(".collapse").collapse('hide');
            $('.nav-item').removeClass('active');
            $(this).addClass('active')
        }       
      });

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