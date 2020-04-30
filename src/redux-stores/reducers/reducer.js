const initState = {
    isSignedIn: false,
    userData:{
        'email': '',
        'name': ''
    },
    selectedGarage: {
        lat: '',
        lng: '',
        zoom: 14
    }
};

const rootReducer = (state = initState, action) => {

    switch(action.type){
        case 'SET_USER_LOG_IN':
            return{
                ...state,
                isSignedIn: !state.isSignedIn
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
        default:
            return state;
    }
};

export default rootReducer;