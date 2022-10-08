import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="main-navigation">
            <div>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/about'>About Me</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/service'>Services</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <button>Blog</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
