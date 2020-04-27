const initState = {
    isSignedIn: false,
    userData:{
        'email': '',
        'name': ''
    }
};

const rootReducer = (state = initState, action) => {

    switch(action.type){
        case 'SET_USER_LOG_IN':
            return{
                ...state,
                isSignedIn: !state.isSignedIn
            };
            break;
        case 'SET_USER_DATA':
            return{
                ...state,
                userData: {
                    email: action.email,
                    name: action.name
                }
            };
            break;
        default:
            return state;
    }
};

export default rootReducer;