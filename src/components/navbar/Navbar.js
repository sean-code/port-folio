import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="header">
            <h1 className="logo">
                <a href="/home">John S. Nganga</a>
            </h1>
            <ul className="main-nav">
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className="nav-link">About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/projects' className="nav-link">Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className="nav-link">Contact</NavLink>
                </li>
                <li>
                    <a href='https://medium.com/@nganga_sean/seans-friend-s-future-past-bfe121d00d53' target={'_blank'}>
                        <button className="btn-1">Blog</button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
