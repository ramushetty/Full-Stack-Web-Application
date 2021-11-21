import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Recipe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/signup" >Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login" >Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/create_recipe" >Create Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" >Log Out</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar