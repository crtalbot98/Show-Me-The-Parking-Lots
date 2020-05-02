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
    userLocation: {},
    closestGarage: {
        name: '',
        miles: null
    },
    itAndEt: false
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
        case 'SET_CLOSEST_GARAGE':
            return{
                ...state,
                closestGarage: {
                    name: action.name,
                    miles: action.miles,
                    type: action.pType,
                    clearances: action.clearances
                }
            };
        case 'SET_NEAR_IT_ET':
            return{
                ...state,
              itAndEt: !state.itAndEt
            };
        default:
            return state;
    }
};

export default rootReducer;