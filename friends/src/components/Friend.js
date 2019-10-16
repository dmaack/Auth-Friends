import React from 'react';
import { connect } from 'react-redux';

const Friend = props => {
    console.log('Friend props', props)

    if(!props) return <h2>Loadings Friends</h2>


    return (
        <div className='friend-container'>
            <p><strong>{props.name}</strong></p>
            <p>{props.age} yrs</p>
            <p>{props.email}</p>
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

export default connect(mapsStateToProps, {})(Friend);