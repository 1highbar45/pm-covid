let map, heatmap
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
  getLocations()
    .then((response) => {
      const data = response;

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
      }, 1);
      locations = locations.slice(1);
      console.log(locations);

      // Render newest location on side bar
      renderSideBarNew(locations);

      // Render history bar
      renderHistoryRows(locations)
      moreRows_global_locations = locations 

      // Render locations as Markers
      renderMapMarker(locations);

      // Render locations as heat point (heat map layer)
      renderHeatMapLayer(locations);

      // Render search box output
      renderSearchBox();

      //Render Pie Chart
      renderPieChart(locations)

      //Render Line Chart
      renderLineChart(locations)

    })
    .catch((e) => console.log(e));
  //------------------API call (not yet used)---------------
}
