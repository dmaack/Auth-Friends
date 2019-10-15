import React from 'react';
import { connect } from 'react-redux';

const FriendList = props => {
    console.log('these are the props passed down from Friend List', props);
    return (
        <div>

        </div>
    )
}

export default connect()(FriendList);