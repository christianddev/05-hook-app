import React from 'react';
import  {NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink to="/" activeClassName="active" className="navbar-brand">useContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
                <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav-link">Login</NavLink>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;
