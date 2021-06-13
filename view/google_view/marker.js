function renderMapMarker (locations) {
    for (const location of locations){
        const latLng = new google.maps.LatLng(location.lat,location.lng)
        new google.maps.Marker({
            position: latLng,
            map:map,
            icon:{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "red",
                fillOpacity: 0.2,
                scale: 25,
                strokeColor: "white",
                strokeWeight: 0.5,
              }
        })
    }
}