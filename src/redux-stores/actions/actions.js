export const setUserLogIn = () => {
    return{
        type: 'SET_USER_LOG_IN'
    }
};

export const setUserData = (email, name) => {
    return{
        type: 'SET_USER_DATA',
        name: name,
        email: email
    }
};

export const setGarage = (lat, lng, zoom) => {
    return{
        type: 'SET_GARAGE',
        lat: lat,
        lng: lng,
        zoom: zoom
    }
};