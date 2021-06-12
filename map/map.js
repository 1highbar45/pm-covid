// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

let map, heatmap;


function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}



function changeRadius() {
    heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

// function changeOpacity() {
//     heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
// }

// Heatmap data: 500 Points
function getPoints() {
    return [
        new google.maps.LatLng(10.76347152, 106.6826186),
        new google.maps.LatLng(10.80862326, 106.6700902),
    ];
}
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
    // create google map
    // load map at defined lat and lng 
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 10.76347152,
            lng: 106.6826186,
        },
        zoom: 15,
    });

    // add heatmap layer
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", function () {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", function () {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}



function selectedLocation() {
    let select = document.getElementById("selQuan");
    let sl = "";
    if (select) {
        sl = select.value;
        if (sl === "bc") {
            // let bc = new google.maps.LatLng(10.79603962, 106.6999017);
            map.setCenter({ lat: 10.79603962, lng: 106.6999017 });
            map.setZoom(15);
        } else if (sl === "gv") {
            // let gv = new google.maps.LatLng(10.79603962, 106.6999017);
            map.setCenter({ lat: 10.79603962, lng: 106.6999017 });
            map.setZoom(15);
        }
    }
}
console.log(selectedLocation());
// google.maps.event.addDomListener(window, "load", function () {
//     initMap();
//     initAutocomplete();
// });
