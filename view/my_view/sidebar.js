//----------------Render Side bar inforamtion ---------------
function renderSideBarNew(locations) {
    const sidebar_new = document.getElementById("side-bar-new");
    let locations_newest = locations.slice(0, 7);
    let locations_newest_display = ``;
    for (const location of locations_newest) {
        locations_newest_display += `<div class="sidebar-item alert alert-primary">
        <span class="badge badge-danger">Q.${location.dist}</span>  
        <span class="badge badge-danger">P.${location.ward}</span>  
        <br>  
        ${location.address}  
        </div>`;
    }
    sidebar_new.innerHTML = locations_newest_display;
}
//----------------Render Side bar inforamtion ---------------
