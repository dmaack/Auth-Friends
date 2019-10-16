import React from 'react';
import { Link } from 'react-router-dom'; 

const WelcomePage = props => {
    console.log('Welcome Page props', props)

    return (
        <div className='welcome-page-container'>
        <div className='welcome-page-content'>
            <h2>Auth Friends</h2>
            <h3>Keep track of all your friends <br></br>on Auth Friends</h3>
            <p><strong>Add</strong> a new friend</p>
            <p><strong>Edit</strong> your friends information</p>
            <p><strong>Remove</strong> your old friends</p>
        </div>
        <div className='get-started-link'>
            <Link to='/login' className='link'><button>Get Started</button></Link>
        </div>
        </div>
    )
}

export default WelcomePage;