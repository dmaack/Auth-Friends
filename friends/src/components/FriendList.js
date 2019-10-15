import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';

const FriendList = props => {
    console.log('these are the props passed down from Friend List', props);
    return (
        <div>
            <h2>Your Friend List</h2>
            <div className='friend-list-container'>
                {props.friendData.map(friend => {
                    <Friend 
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    />
                })}
            </div>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        friendDate: state.friendData,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapsStateToProps, {})(FriendList);