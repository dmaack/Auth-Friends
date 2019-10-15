import React from 'react';

import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = () => {
    console.log('these are the Login props', props)



    return (
        <div className='login-form'>
            <form onSubmit={}>
                {localStorage.getItem('token') ? 
                <Redirect to='/profilePage' />
                : (
                    <>
                    <input 
                        type='text'
                        name='username'
                        placeholder='example@email.com'
                        value={}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={}
                    />
                    </>
                )}
            </form>
        </div>
    )
}

export default Login;