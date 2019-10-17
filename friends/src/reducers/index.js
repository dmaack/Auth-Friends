import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE,
    ADD_FRIENDS_SUCCESS,
    ADD_FRIENDS_FAILURE
} from '../actions';


const initialState = {
    friendData: [],
    isLoading: false,
    error: ''
}


export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friendData: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_FRIENDS_SUCCESS:
            return {
                ...state,
                friendData: action.payload,
                isLoading: false,
                error: ''
            }
        case ADD_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
                }   
        default:
            return state;
    }
}