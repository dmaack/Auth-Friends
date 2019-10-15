import React from 'react';
import { connect } from 'react-redux';

const Friend = props => {
    console.log('these are the props passed from Friend', props)

    if(!props) return <h2>Loadings Smurfs</h2>


    return (
        <div className='friend-container'>
            <p>{props.name}</p>
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