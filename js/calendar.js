
$(document).ready(function () {

  var strCalDate = getParameterByName('jday');

  if (strCalDate === '') {
    strCalDate = $.datepicker.formatDate('mm/dd/yy', new Date());
    console.log(strCalDate);
  };
  $("#datepicker").datepicker({
    nextIcon:"ui-icon-gear",
    inline: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    showOtherMonths: true,
    selectOtherMonths: true,
    minDate: new Date(2011, 1 - 1, 1),
    maxDate: "+1y +6m",
    defaultDate: strCalDate
  });

  //gets rid of todays formatting
  $('.ui-state-highlight').removeClass('ui-state-highlight');

  $("#datepicker").change(function () {
  //  var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  var the_date = $('#datepicker').val();
  //console.log(the_date);

  window.location.href = "https://www.leg.state.mn.us/calendarday?jday=" + the_date;
  });


});