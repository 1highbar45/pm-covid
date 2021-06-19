function selectedLocation() {
    var selected = document.getElementById("location").value;
    if (selected == "gv") {
        var goVap = new google.maps.LatLng(10.84712018, 106.6513029);
        map.setCenter(goVap);
        map.setZoom(17);
    } else if (selected == "bt") {
        var binhThanh = new google.maps.LatLng(10.79603962, 106.6999017);
        map.setCenter(binhThanh);
        map.setZoom(17);
    }
}
