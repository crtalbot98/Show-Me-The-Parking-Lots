
const degToRadians = (degrees) => { //Convert degree values to radians
    const pi = Math.PI;
    return degrees * (pi/180);
};

export const latToMiles = (lat1, lat2, lon1, lon2) => { //Convert radian values to miles from lat and lng
    const r = 3958.7559;
    const lat1Rads = degToRadians(lat1);
    const lat2Rads = degToRadians(lat2);
    const latDiff = degToRadians(lat2-lat1);
    const lonDiff = degToRadians(lon2-lon1);

    const a = Math.sin(latDiff/2) * Math.sin(latDiff/2) + Math.cos(lat1Rads) * Math.cos(lat2Rads) * Math.sin(lonDiff/2) * Math.sin(lonDiff/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return r * c;
};