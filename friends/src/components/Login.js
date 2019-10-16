import React, { useState } from 'react';
import { connect } from 'react-redux';

// import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { addLogin } from '../actions';

const Login = (props) => {
    console.log('these are the Login props', props)
    const [login, setLogin] = useState({});

    const loginSubmit = e => {
        e.preventDefault()
        if (login.name.trim() && login.age.trim() && login.email.trim()) {
            props.addLogin(login)
            setLogin('');
        }
    }

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    return (
        <div className='login-form'>
            <form onSubmit={loginSubmit}>
                {localStorage.getItem('token') ? 
                <Redirect to='/profilePage' />
                : (
                    <>
                    <input 
                        className='login-input'
                        type='text'
                        name='username'
                        placeholder='example@email.com'
                        onChange={handleChange}
                        value={login.username}
                    />
                    <input 
                        className='login-input'
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={handleChange}
                        value={login.password}
                    />
                    </>
                )}
            </form>
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

export default connect(mapsStateToProps, { addLogin })(Login);