import React, { useContext } from 'react'
import User from './User';
import UserContext from './UserContext'

const HomeScreen = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>
            <User user={user}/>
        </div>
    )
}

export default HomeScreen
