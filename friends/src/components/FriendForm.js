import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from '../actions';

const FriendForm = props => {
    console.log('these are the props from Friend Form', props)

    const [friend, setFriend] = useState({});
    console.log('this is my friend form state', friend)

    useEffect(() => {
        props.fetchFriends();
    }, [props])

    if (props.isFetching) {
        console.log('this is my loading props',props.isFetching)
        return <h2>Loading Your Friends...</h2>;
      }
    
    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (friend.name.trim() && friend.age.trim() && friend.email.trim()) {
            props.addFriend(friend)
            setFriend('');
        }
    }

    return (
        <div className='friend-form-container'>
            <form onSubmit={handleSubmit}>
                <h3>Add New Friend!</h3>
                <br></br>
                <label>Name</label>
                <input 
                    className='friend-input'
                    type='text'
                    name='name'
                    placeholder='Enter Friend Name'
                    onChange={handleChange}
                    value={friend.name}
                />
                <label>Age</label>
                <input 
                    className='friend-input'
                    type='text'
                    name='age'
                    placeholder='Enter Friend Age'
                    onChange={handleChange}
                    value={friend.age}
                />
                <label>Email</label>
                <input 
                    className='friend-input'
                    type='email'
                    name='email'
                    placeholder='Enter Friend Email'
                    onChange={handleChange}
                    value={friend.email}
                />
            </form>
            <button className='add-friend-button' type='submit'>Add</button>
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

export default connect(mapsStateToProps, { fetchFriends, addFriend })(FriendForm);