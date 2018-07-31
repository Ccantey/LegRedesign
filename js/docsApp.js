var bannerList, currentTheme;

var to = null;
var int = null;

function banner(){
	$.ajax("../../banners.txt", {
/*		 data: data,*/
		success: function(result){
		    bannerList = result.split('\n');
			// bannerList.shift(); //not sure why I was shifting the array
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

	
	// var imageURL = window.location.href
	// imageURL.split("#");
	// console.log(imageURL)

	$('#imageName').html(currentImage)
	setURL(currentImage)
}

function setURL(image) {
	var imageURL = window.location.href
	var splitURL = imageURL.split('?image=')
	console.log(splitURL.length);
	window.location.href = splitURL[0] + "?image=" + image;
}

function getImageURL(){
	currentTheme = $('#bannerImage').attr('class', function(index, className){
		return (className.match (/(^|\s)img-\S+/g) || []).join(' ');
	});
	var imageURL = window.location.href
	var splitURL = imageURL.split('?image=')
	
	if (splitURL.length > 1){
		console.log(splitURL[1]);
		$(currentTheme).css('background-image', "url(https://ww2.gis.leg.mn/iMaps/bootstrap4/img/banners/"+ splitURL[1] +")");
	}
}

function adjustImageMousedown(direction){  
   getPosition(direction)

	if (direction =="up"){
		var temp = moveUp
	    to = setTimeout(function () {
        int = setInterval(function () {
	        	temp++;
	        	$(currentTheme).css('background-position', '50% ' + temp +'%')
				$('#coverSize').html('background-position: 50% ' + temp +'%')
       		}, 75);
    	}, 500);
		
	}
	if (direction =="down"){
		var temp = moveDown
	    to = setTimeout(function () {
        int = setInterval(function () {
	        	temp--;
	        	$(currentTheme).css('background-position', '50% ' + temp +'%')
				$('#coverSize').html('background-position: 50% ' + temp +'%')
       		}, 75);
    	}, 500);
	}
}

function adjustImageClick(direction){
	getPosition(direction)

	if (direction =="up"){
		$(currentTheme).css('background-position', '50% ' + moveUp +'%')
		$('#coverSize').html('background-position: 50% ' + moveUp +'%')
	}
	if (direction =="down"){
		$(currentTheme).css('background-position', '50% ' +moveDown +'%')
		$('#coverSize').html('background-position: 50% ' + moveDown +'%')
	}

}

function getPosition(direction){
	currentTheme = $('#bannerImage').attr('class', function(index, className){
		return (className.match (/(^|\s)img-\S+/g) || []).join(' ');
	});

	var currentPosition = $(currentTheme).css('background-position').split(' ')[1];
	if(direction=="down"){
		return moveDown = parseFloat(currentPosition)-1;
	} else{return moveUp = parseFloat(currentPosition)+1;}
	
	
}


$(document).ready(function () {
//toggle themes in docs
      getImageURL();
      $('#themeToggle input[type=radio]').on('change', function(e){

        $('#sub-nav').removeClass(function(index, className){
          return (className.match (/(^|\s)bg-\S+/g) || []).join(' ');
        })
        $('#sub-nav').removeClass(function(index, className){
          return (className.match (/(^|\s)navbar-\S+/g) || []).join(' ');
        })
        $('#sub-nav').addClass('bg-'+this.value)
        $('#sub-nav').addClass('navbar-'+this.value)
        $('#sub-nav').addClass('navbar-expand-lg')

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

      $("#bannerPosition button").on('mousedown',function(event){  	
        adjustImageMousedown(this.value)
      }).on("mouseup", function () {
	        clearTimeout(to);
	        clearInterval(int);
	    });

      $("#bannerPosition button").click(function(){
      	adjustImageClick(this.value)
      })

});
