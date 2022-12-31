import React from "react";
import './Error.css';

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

            {/* <!--Dust particle end---> */}


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
                <h1 className="message__title">Thanks For Landing</h1>
                <p className="message__text">Kindly use the Navigation Bar
                at the top of this page to explore. </p>
                <p className="click">You can also click the button below</p>
                </div>
                <div className="error__nav e-nav">
                    <a href="http://sean-code.github.io/home" target="_self" className="e-nav__link"></a>
                </div>
            </div>

            {/* END Content */}

            </section>
        </>
    )
}

export default Error;