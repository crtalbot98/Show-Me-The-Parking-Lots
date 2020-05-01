const initState = {
    isSignedIn: false,
    userData:{
        email: '',
        name: ''
    },
    selectedGarage: {
        lat: 39.768996924,
        lng: -86.17166598,
        zoom: 15
    },
    userLocation: {}
};

const rootReducer = (state = initState, action) => {

    switch(action.type){
        case 'SET_USER_LOG_IN':
            return{
                ...state,
                isSignedIn: action.bool
            };
        case 'SET_USER_DATA':
            return{
                ...state,
                userData: {
                    email: action.email,
                    name: action.name
                }
            };
        case 'SET_GARAGE':
            return{
                ...state,
                selectedGarage: {
                    lat: action.lat,
                    lng: action.lng,
                    zoom: action.zoom
                }
            };
        case 'SET_USER_LOC':
            return{
              ...state,
              userLocation: {
                  x: action.x,
                  y: action.y
              }
            };
        default:
            return state;
    }
};

export default rootReducer;