var temp;
$(document).ready(function () {
     
  $('[data-toggle="tooltip"]').tooltip()
     
  $('[data-toggle="popover"]').popover()

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

  $('.collapse').hover(function(){
    $('#'+temp).collapse('show');
  })

 //  $('.nav-item a').hover(function(){
 //    // console.log($(this).attr('aria-controls'))
 //    temp=$(this).attr('aria-controls');
 //    console.log(temp)
 //    $('#'+temp).collapse('show');
 // }, function() {
 //    console.log(temp)
 //    $('#'+temp).collapse('hide');
 // });

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