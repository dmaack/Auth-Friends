import React, { useState } from 'react';
import { connect } from 'react-redux';

// import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { addLogin } from '../actions';

const Login = (props) => {
    console.log('Login props', props)
    const [login, setLogin] = useState({});
    console.log('login state', login)

    const loginSubmit = e => {
        console.log('Login e', e)
        e.preventDefault()
        if (login.username.trim() && login.password.trim()) {
            props.addLogin(login)
            setTimeout(props.history.push('/profilePage'), 1000)
            setLogin('');
        }
    }

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    return (
        <div className='login-form'>
            <form className='login-form' onSubmit={loginSubmit}>
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
                    <button type='submit'>Login</button>
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