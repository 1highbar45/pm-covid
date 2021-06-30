
let locations = []

//--------------Fetch API---------------------------------
const getLocations = async () => {
    const raw = await fetch("https://covid-vn.herokuapp.com/locations");
    const locations = await raw.json();
    return locations;
};
//--------------Fetch API---------------------------------
