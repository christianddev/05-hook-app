import React, { useContext } from 'react';
import User from './User';
import UserContext from './UserContext';

const AboutScreen = () => {
    const {user, setUser} = useContext(UserContext);

    const handleLogout = () => {
        setUser({});
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>
            
            <User user={user}/>

            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
    )
}

export default AboutScreen
