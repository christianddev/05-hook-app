import React, { useContext } from 'react'
import UserContext from './UserContext'

const LoginScreen = () => {
    
    const {setUser} = useContext(UserContext);
    const handleUser = () => {
        setUser({id: new Date().getTime(), name: 'superUser'})
    } 
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button onClick={handleUser} className="btn btn-primary">Login</button>
        </div>
    )
}

export default LoginScreen
