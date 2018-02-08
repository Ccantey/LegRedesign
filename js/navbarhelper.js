    $(document).ready(function () {
     
  $('[data-toggle="tooltip"]').tooltip()
     
  $('[data-toggle="popover"]').popover()

      $('.nav-item').click(function(event){

        if ($(this).hasClass('active')){
            
        } else {
            $(".collapse").collapse('hide');
            $('.nav-item').removeClass('active');
            $(this).addClass('active')
        }       
      });

      $(document).click(function (event) {
        var clickover = $(event.target);
        // console.log(clickover.parents());
        var _opened = $(".collapse").hasClass("collapse show");
        $(".collapse").collapse('hide');
        if (_opened === true && !clickover.hasClass("dropdown-toggle")) {
            console.log('true')
            $(".collapse").collapse('hide');
        }
      });

      $('.moreAccordion').on('shown.bs.collapse', function () {
        var textOption = $(this).attr('data-child');
        $(textOption).html('Fewer Links');
      });
      $('.moreAccordion').on('hidden.bs.collapse', function () {
        var textOption = $(this).attr('data-child');
        $(textOption).html('More Links');
      });

          

});