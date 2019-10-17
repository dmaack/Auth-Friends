import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';

const FriendList = props => {
    console.log('Friend List props', props);
    return (
        <div className='friend-list-container'>
            <h2>Friends</h2>
            <div className='friend-list'>
                {props.friendData.map(friend => (
                    <Friend 
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    />
                ))}
            </div>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        friendData: state.friendData,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapsStateToProps, {})(FriendList);