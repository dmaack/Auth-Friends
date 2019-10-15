import { axiousWithAuth } from '../utilis/axiosWithAuth';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START})

    axiousWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log('this is the data from api request', res)
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log('could not fetch data', err)
        dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err})
    })
}

export const addFriend = ({name, age, email}) => dispatch => {
    console.log('this is the friend info im adding', name, age, email)
    .post('/api/friends', {
        name,
        age,
        email,
    })
    .then(res => {
        console.log('this is the response from axios post request', res)
        dispatch({ type: 'ADD_FRIEND_SUCCESS', payload: res.data})
    })
    .catch(err => {
        console.log('data not posted', err)
        dispatch({ type: 'ADD_FRIEND_FAILURE', payload: err})
    })
}


