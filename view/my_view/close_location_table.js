function renderCloseLocations(userLatLng){
    const distArr = []
    for (const location of locations) {
      const dest = {...location}
      const destLatLng = [dest.lat,dest.lng]
      dest.distance = getDistance(userLatLng,destLatLng)
      distArr.push(dest)  
    };

    closedLocations = distArr.filter(location => location.distance < 1000)
    closedLocations.sort((location1,location2) => location1.distance - location2.distance)


    const displayLocation = document.getElementById('close-tbody')
    const displayAlert = document.getElementById('near-location-alert')
    const tableDisplay = document.getElementById('close-table')

    // If there are quarantined location nearby (<1000)
    if (closedLocations.length > 0){
        displayAlert.innerHTML = `Có ${closedLocations.length} khu vực phong tỏa gần bạn`
        tableDisplay.style.visibility = 'visible'

        displayLocation.innerHTML = ''
        for (const location of closedLocations){
            let displayContent = displayLocation.innerHTML
            displayContent += `
            <tr>
          <th scope="row"><span class="badge ${location['distance'] < 500 ? 'badge-danger' : 'badge-warning'}" >${Math.round(location['distance'],3)}</span></th>
          <td>${location['date']}</td>
          <td>${location['address']}</td>
          <td>${location['ward']}</td>
          <td>${location['dist']}</td>
          </tr>
            `
            displayLocation.innerHTML = displayContent
        }
    }
    else{
        displayAlert.innerHTML = 'Không có các khu vực phong tỏa gần bạn'
    }

 
    
}


function getDistance(origin, destination) {
    // return distance in meters
    let lng1 = toRadian(origin[1]),
        lat1 = toRadian(origin[0]),
        lng2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);

    let deltaLat = lat2 - lat1;
    let deltalng = lng2 - lng1;

    let a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltalng/2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    let EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
    return degree*Math.PI/180;
}
