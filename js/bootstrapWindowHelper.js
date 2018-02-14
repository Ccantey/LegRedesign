/* bootstrap Window Helper
 * Chris Cantey, https://github.com/Ccantey/bootstrapWindowSize.js
 * A js plug-in that logs the bootstrap grid column class to the console
 * when resizing the browser window
*/

$( document ).ready(function() {
  var resizeTimer;
  function getBootstrapBreakpoint(){
    var w = $(document).innerWidth();
    return (w < 576) ? 'xs' : ((w < 768) ? 'sm' : ((w < 992) ? 'md' : ((w < 1200) ? 'lg' : 'xl')));
  }

  console.log(getBootstrapBreakpoint());
  
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      console.log(getBootstrapBreakpoint());                    
    }, 250);
  });
});