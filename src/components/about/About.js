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
                <h4 className="subtitle">I am a programmer.</h4>
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
                <h4 className="subtitle">Also a BioEngineer.</h4>
                <p>
                  I hold a Bachelor of Technology in Biotechnology.
                  I feel comfortable working with Bioinformatic tools
                  namely: BLAST, MEGA-X, and Clustal.
                  I also perform Whole-genome sequencing, Nucleotide Sequencing, sequence alignment,  .. You name it! 
                  As I mentioned, I am a tech savvy and interacting with technological tools is important to me.
                </p>
                <p>
                 Also proficient in Data Analysis tools(SPSS, and GraphPad Prism etc.) 
                </p>
                <p>
                  Interacting with Software is my thing!!
                </p>
              </div>
            </article>
          </div>
        </section>
      );
}

export default About;