// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

// function initialize() {
//     initMap();
//     initAutocomplete();
// }

let map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        // center: { lat: 37.775, lng: -122.434 },
        center: { lat: 10.76347152, lng: 106.6826186 },
        // mapTypeId: "satellite",
        // mapTypeId: "hybrid",
        mapTypeId: "terrain",
        // mapTypeId: "roadmap",
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
    });

    initAutocomplete();
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

// function changeGradient() {
//     const gradient = [
//         "rgba(0, 255, 255, 0)",
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 191, 255, 1)",
//         "rgba(0, 127, 255, 1)",
//         "rgba(0, 63, 255, 1)",
//         "rgba(0, 0, 255, 1)",
//         "rgba(0, 0, 223, 1)",
//         "rgba(0, 0, 191, 1)",
//         "rgba(0, 0, 159, 1)",
//         "rgba(0, 0, 127, 1)",
//         "rgba(63, 0, 91, 1)",
//         "rgba(127, 0, 63, 1)",
//         "rgba(191, 0, 31, 1)",
//         "rgba(255, 0, 0, 1)",
//     ];
//     heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
// }

function changeRadius() {
    heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

// function changeOpacity() {
//     heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
// }

// Heatmap data: 500 Points
function getPoints() {
    return [
        //hcm
        new google.maps.LatLng(10.76347152, 106.6826186),
        new google.maps.LatLng(10.80862326, 106.6700902),
    ];
}

// Search box autocomplete
function initAutocomplete() {
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
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
                    map,
                    icon,
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
// Search box autocomplete - End
