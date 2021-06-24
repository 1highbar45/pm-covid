function selectedLocation() {
    var selected = document.getElementById("location").value;
    if (selected == "gv") {
        let goVap = new google.maps.LatLng(10.84712018, 106.6513029);
        map.setCenter(goVap);
        map.setZoom(15);
    } else if (selected == "bt") {
        let binhThanh = new google.maps.LatLng(
            10.809900645809872,
            106.69940622946883
        );
        map.setCenter(binhThanh);
        map.setZoom(15);
    }
}

// 10.809900645809872, 106.69940622946883
