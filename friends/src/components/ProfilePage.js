import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FriendList from './FriendList';
import FriendForm from './FriendForm';
import { addFriend } from '../actions';

const ProfilePage = props => {
    console.log('Profile Props', props)

    // useEffect(() => {
    //     props.addFriend();
    // }, [])

    return(
        <div>
            <h1>Hello User!</h1>
            <FriendForm />
            <FriendList friends={props}/>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        friendData: state.friendData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapsStateToProps, { addFriend })(ProfilePage);