let map, heatmap;
function initAutocomplete() {
    // create google map
    // load map at defined lat and lng
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 10.76347152,
            lng: 106.6826186,
        },
        zoom: 15,
        mapTypeId: "terrain",
    });

    //------------------API call (not yet used)---------------
    // getLocations().then(response=>
    //   { data = response

    //     let locations = []
    //     data.map((location) => {
    //       locations = [
    //         ...locations,
    //         {
    //           id: location[0],
    //           case_id: location[1],
    //           address: location[2],
    //           ward: location[3],
    //           dist: location[4],
    //           date: location[5],
    //           lat: location[6],
    //           lng: location[7],
    //         },
    //       ];
    //     }, 1);
    //     locations = locations.slice(1);
    //     console.log(locations);

    //     // Render newest location on side bar
    //     renderSideBarNew(locations)

    //     // Render heat map layer
    //     renderHeatMapLayer(locations)

    //  }).catch(e=>console.log(e))
    //------------------API call (not yet used)---------------

    // ------------------Copy data to new array--------------------
    let locations = [];
    data.map((location) => {
        locations = [
            ...locations,
            {
                id: location[0],
                case_id: location[1],
                address: location[2],
                ward: location[3],
                dist: location[4],
                date: location[5],
                lat: location[6],
                lng: location[7],
            },
        ];
    });

    locations = locations.slice(1);
    console.log(locations);

    // Render newest location on side bar
    renderSideBarNew(locations);

    // Render locations as Markers
    renderMapMarker(locations);
    // Render locations as heat point (heat map layer)
    renderHeatMapLayer(locations);

    // Copy data to new array of object for temporary manipulation

    // ------------------Copy data to new array--------------------

    // Render newest location on side bar
    renderSideBarNew(locations);

    // Render heat map layer
    renderHeatMapLayer(locations);

    // Render search box output
    renderSearchBox();
}
