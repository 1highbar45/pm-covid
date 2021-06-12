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
    getLocations().then(response=> { data = response
     }).catch(e=>console.log(e))
  //------------------API call (not yet used)---------------


  


// ------------------Copy data to new array-------------------- 
  let locations = [];           // Data is from data.js
                                // Copy data to new array for temporary manipulation
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
// ------------------Copy data to new array--------------------



//----------------Render Side bar inforamtion ---------------
  const sidebar_new = document.getElementById("side-bar-new");
  let locations_newest = locations.slice(0, 7);
  let locations_newest_display = ``;
  for (const location of locations_newest) {
    locations_newest_display += `<div class="alert alert-primary">
    <span class="badge badge-danger">${location.date}</span>    
    ${location.address}
      </div>`;
  }
  sidebar_new.innerHTML = locations_newest_display
//----------------Render Side bar inforamtion ---------------


//----------------Load Heat Map Data-------------------------
let heatmapData = [
    // new google.maps.LatLng(10.7361097833921, 106.690874134936),
    // new google.maps.LatLng(10.8471201786187, 106.651302875796),
    // new google.maps.LatLng(10.8472017809054, 106.634142781257),
    // new google.maps.LatLng(10.7960396167624, 106.699901658121),
    // new google.maps.LatLng(10.8088893004938, 106.669654088276),
  ];


  heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
  });

  let btn_toggle_heatmap = document.getElementById("btn_toggle_heatmap");
  btn_toggle_heatmap.addEventListener("click", toggleHeatmap);
}
//----------------Load Heat Map Data-------------------------


function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}
