var bannerList, currentTheme;

function banner(){
	$.ajax("/iMaps/bootstrap4/banners.txt", {
/*		 data: data,*/
		success: function(result){
		    bannerList = result.split('\n');
			bannerList.shift();
			bannerList.pop();
		}, 
		error: function(){
			console.log('error');
		}
	});
}

function rotateImage(arrow){
	currentTheme = $('#bannerImage').attr('class', function(index, className){
		return (className.match (/(^|\s)img-\S+/g) || []).join(' ');
	});
	var currentImage = $(currentTheme).css('background-image').split('/').pop().split('")')[0];
    var index = bannerList.indexOf(currentImage)

    switch (arrow){
    	case 'left':
	    	 if (index >0 ){
	    	 	$(currentTheme).css('background-image', "url(https://ww2.gis.leg.mn/iMaps/bootstrap4/img/banners/"+ bannerList[index-1] +")");
	    	 }
	    	 else {
		    	index = bannerList.length -1;
		    	$(currentTheme).css('background-image', "url(https://ww2.gis.leg.mn/iMaps/bootstrap4/img/banners/"+ bannerList[index] +")");
		    }
		    break;
		case 'right':
			if (index < bannerList.length -1){
				$(currentTheme).css('background-image', "url(https://ww2.gis.leg.mn/iMaps/bootstrap4/img/banners/"+ bannerList[index+1] +")");
			}
			else {
				index = 0;
				$(currentTheme).css('background-image', "url(https://ww2.gis.leg.mn/iMaps/bootstrap4/img/banners/"+ bannerList[index] +")");
			}
			break;
	}   
	currentImage = $(currentTheme).css('background-image').split('/').pop().split('")')[0];
	$('#imageName').html(currentImage)
}

function adjustImage(direction){
	currentTheme = $('#bannerImage').attr('class', function(index, className){
		return (className.match (/(^|\s)img-\S+/g) || []).join(' ');
	});

	var currentPosition = $(currentTheme).css('background-position').split(' ')[1];
	var moveUp = parseFloat(currentPosition)+1;
	var moveDown = parseFloat(currentPosition)-1;

	if (direction =="up"){
		$(currentTheme).css('background-position', '50% ' + moveUp +'%')
		$('#coverSize').html('background-position: 50% ' + moveUp +'%')
	}
	if (direction =="down"){
		$(currentTheme).css('background-position', '50% ' +moveDown +'%')
		$('#coverSize').html('background-position: 50% ' + moveDown +'%')
	}

}
$(document).ready(function () {
//toggle themes in docs
      $('#themeToggle input[type=radio]').on('change', function(e){
        $('#subNav').removeClass(function(index, className){
          return (className.match (/(^|\s)bg-\S+/g) || []).join(' ');
        })
        $('#subNav').removeClass(function(index, className){
          return (className.match (/(^|\s)navbar-\S+/g) || []).join(' ');
        })
        $('#subNav').addClass('bg-'+this.value)
        $('#subNav').addClass('navbar-'+this.value)
        $('#subNav').addClass('navbar-expand-lg')

        $('#bannerImage').removeClass(function(index, className){
          return (className.match (/(^|\s)img-\S+/g) || []).join(' ');
        })
        $('#bannerImage').addClass('img-'+this.value);
        $('#imageName').html($('#bannerImage').css('background-image').split('/').pop().split('")')[0]);
        $('#coverSize').html('background-position: '+$('#bannerImage').css('background-position'));
      })
      
      //on button click
      banner();
      $('#imageName').html($('#bannerImage').css('background-image').split('/').pop().split('")')[0]);
      $('#coverSize').html('background-position: '+$('#bannerImage').css('background-position'));
      $("#bannerButtons button").click(function(event){
        rotateImage(this.value)        
      });

      $("#bannerPosition button").click(function(event){
        adjustImage(this.value)

      })

});
