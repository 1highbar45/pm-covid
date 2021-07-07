//----------------Render heat map layer-------------------------
function renderHeatMapLayer(locations) {
    let heatmapData = [
        // new google.maps.LatLng(10.7361097833921, 106.690874134936),
        // new google.maps.LatLng(10.8471201786187, 106.651302875796),
        // new google.maps.LatLng(10.8472017809054, 106.634142781257),
        // new google.maps.LatLng(10.7960396167624, 106.699901658121),
        // new google.maps.LatLng(10.8088893004938, 106.669654088276),
    ];
    for (const location of locations) {
        heatmapData = [
            ...heatmapData,
            new google.maps.LatLng(location.lat, location.lng),
        ];
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
    });
    heatmap.set("radius", 15);

    // Set toggle button
    //let btn_toggle_heatmap = document.getElementById("btn_toggle_heatmap");
    //btn_toggle_heatmap.addEventListener("click", toggleHeatmap);
}
//-------------------Render heat map layer-------------------------

// function toggleHeatmap() {
//     heatmap.setMap(heatmap.getMap() ? null : map);
// }
