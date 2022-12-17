import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="main-navigation">
            <div className="navbar">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/about' className="nav-link">About Me</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/service' className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/contact' className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <a href='https://medium.com/@nganga_sean/seans-friend-s-future-past-bfe121d00d53' target='_blank'>
                        <button className="btn-1">Blog</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
