import React from "react";
import './Error.css';
import {NavLink} from 'react-router-dom';

function Error(){
    return(
        <>
            {/* dust particles */}

            <div>
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
            </div>

            {/* Dust particle end */}

            <div className="lamp__wrap">
            <div className="lamp">
                <div className="cable"></div>
                <div className="cover"></div>
                <div className="in-cover">
                <div className="bulb"></div>
                </div>
                <div className="light"></div>
            </div>
            </div>

                {/* END Lamp  */}

            <section className="error">
            {/* Content  */}
            <div className="error__content">
                <div className="error__message message">
                <h1 className="message__title">OOPs!! Page Not Found</h1>
                <p className="message__text">Kindly use the Navigation Bar
                at the top of this page to explore. </p>
                <p className="click">You can also click the button below</p>
                </div>
                <div className="error__nav e-nav">
                   <NavLink to='/'> 
                    <a href="https://sean-code.github.io/port-folio/" target="_self" className="e-nav__link"></a>
                   </NavLink>
                </div>
            </div>

            {/* END Content */}

            </section>
        </>
    )
}

export default Error;