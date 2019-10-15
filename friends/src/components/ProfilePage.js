import React from 'react';
import { connect } from 'react-redux';
import FriendList from './FriendList';
import FriendForm from './FriendForm';

const ProfilePage = props => {
    console.log('these are the props from Profile', props)

    return(
        <div>
            <h1>Hello User!</h1>
            <FriendForm />
            <FriendList />
        </div>
    )
}

export default connect()(ProfilePage);