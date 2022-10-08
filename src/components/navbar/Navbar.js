import React from "react";
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Me</NavLink>
            <NavLink to='/service'>Services</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <button>Blog</button>
        </div>
    )
}

export default Navbar;
