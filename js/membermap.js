var map, pushPinPMarker;

function init(){

	map = L.map("map", {
        center: L.latLng(44.96, -93.09),
        // maxBounds: bounds,
        zoom: 12
    });

	// Add streets basemap
    var streetsBasemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2NhbnRleSIsImEiOiJjaWVsdDNubmEwMGU3czNtNDRyNjRpdTVqIn0.yFaW4Ty6VE3GHkrDvdbW6g', {
        maxZoom: 18,
        minZoom: 6,
        zIndex: 1,
        // attribution to go beside "Leaflet" in the bottom-left corner of the page
        // attribution: 
        //         'Legislative data &copy; <a href="http://www.gis.leg.mn/">LCC-GIS</a>',
        id: 'mapbox.streets'
    }).addTo(map);
}

$( document ).ready(function() {
	init();
    $('.list-group-item').on('click', function(){
    	latlong = $(this).data('location');
    	//remove old pushpin and previous selected district layers 
		if (typeof pushPinMarker !== "undefined" ){ 
			map.removeLayer(pushPinMarker);			
		}
		//add marker
		map.setView(L.latLng(latlong[0], latlong[1]),12);
    	pushPinMarker = new L.marker(latlong).addTo(map);
    })
});