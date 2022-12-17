import React from "react";
import './About.css'


function About(){
    return (
        <section id="about">
          <div className="wrapper">
            <article>
              <div className="title">
                <h3>Who's this guy?</h3>
                <p className="separator" />
              </div>
              <div className="desc full">
                <h4 className="subtitle">My name is John Nganga.</h4>
                <p>
                  I am a Software Engineer, Full-Stack Developer(Front-end and Back-end), and also a BioEngineer
                  based in Nairobi, Kenya. 
                </p>
                <p>
                    I am a tech enthusiast who really enjoys solving problems as well as making things pretty and easy to use. 
                    I can't stop learning new things; the more, the merrier, the better. I also love photography and skating.
                </p>
              </div>
              <div className="title">
                <h3>How about me?</h3>
                <p className="separator" />
              </div>
              <div className="desc">
                <h4 className="subtitle">I'm a programmer.</h4>
                <p>
                  For the front-end I usually work with HTML and Javascript, 
                  either standalone or including ReactJS framework. I also make the web pretty by incorporating Sass, 
                  CSS, and Bootstrap.
                </p>
                <p>
                  For the back-end I also work with Javascript - NodeJS. But, of 
                  course, whenever the project requires Ruby, I do Ruby-on-Rails, SQLITE3, and POSTGRES.
                </p>
              </div>
              <div className="desc">
                <h4 className="subtitle">Also a Biotechnologist.</h4>
                <p>
                  I feel comfortable working with Bioinformatic tools
                </p>
                <p>
                  User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                  pretty things is particularly important for me.
                </p>
              </div>
            </article>
          </div>
        </section>
      );
}

export default About;