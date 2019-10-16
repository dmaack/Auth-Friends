import React from 'react';
import { Link } from 'react-router-dom'; 

const WelcomePage = props => {
    console.log('Welcome Page props', props)

    return (
        <div>
            <h2>Auth Friends</h2>
            <p>Keep track of all your friends on Auth Friends</p>
            <p><strong>Add</strong> a new friend</p>
            <p><strong>Edit</strong> your friends information</p>
            <p><strong>Remove</strong> your old friends</p>

            <Link to='/login'>Get Started</Link>
        </div>
    )
}

export default WelcomePage;