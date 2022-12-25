import './Project.css';
import Project from './Project.js'

function Projects(props){
    return (
        <section id="projects">
          <div className="projects-container">
            <div className="heading">
              <h3 className="title">My Works</h3>
              <p className="separator" />
              <p className="subtitle">
                Here's a list of {' '}
                <a href="https://github.com/sean-code" target={"_blank"}>
                    most
                </a>
                {' '}of the projects I've worked on recently. Some
                were built during my coding adventure at {' '}
                <a href="https://moringaschool.com/courses/software-engineering-course-online/?https://moringaschool.com/courses/data-science-course/?utm_source=google&utm_medium=cpc&utm_campaign=Feb_6th_2023&gclid=CjwKCAiAkfucBhBBEiwAFjbkr7FtFZqC4cATG5O-KWDVsc6QfXXttLrolPaIpprkTTMbfDJeGJ43ihoC5KwQAvD_BwE" target="_blank">
                    Moringa School
                </a>
                , where I've been coding for almost 10 months non-stop until I completed all the projects
                required to get my Software Engineering Certification.
              </p>
            </div>
            <div className="projects-wrapper">
              <Project
                title="Personal Profile Card."
                img={'https://sean-code.github.io/profile-card/img/13A0A243-165A-43B5-8741-D2C1FD3DA9CA.jpg'}
                tech="js css react node"
                link="https://sean-code.github.io/profile-card/"
                repo="https://github.com/sean-code/profile-card"
              >
                <small>
                  Built using HTML, CSS, SCSS, SASS
                </small>
                <p>
                  This is a personal profile card website that I created which lets the users check 
                  me out on Social Media platforms and even reach out to me
                with messages and replies.
                </p>
              </Project>
              <Project
                title="Music Life+"
                img={'https://i.ibb.co/R713vWz/Screenshot-from-2022-12-18-15-21-20.png'}
                tech="js node css"
                link="https://github.com/sean-code/Music-Life-Project"
                repo="https://github.com/sean-code/Music-Life-Project"
              >
                <small>Built using HTML, db.json, JavaScript, CSS, Bootstrap</small>
                <p>
                  A full-stack website application that allows a user to search for music lyrics and leave a review
                </p>
              </Project>
              <Project
                title="Marvel Stars UI"
                img={'https://i.ibb.co/N2QrCvc/Screenshot-from-2022-12-18-15-43-53.png'}
                tech="js node css"
                link="https://sean-code.github.io/Marvel-UI/"
                repo="https://github.com/sean-code/Marvel-UI/"
              >
                <small>Built using JavaScript, SASS, HTML, CSS </small>
                <p>
                    A website that displays professionally created UI inspired by my favorite Marvel's Avengers</p>
              </Project>

              <Project
                title="Tic Tac Game"
                img={'https://github.com/sean-code/tic-tac/raw/main/screenshot.gif'}
                tech="js node css"
                link="https://sean-code.github.io/tic-tac/"
                repo="https://github.com/sean-code/tic-tac/"
              >
                <small>Built using React JS, CSS </small>
                <p>
                  A simulated development of a digitized tic tac game for entertainment. Play against the computer.
                  This classic game contributes to children's developmental growth in numerous ways including their understanding of predictability and problem solving.
                </p>
              </Project>

              <Project
                title="Vallie's Estate"
                img={'https://sean-code.github.io/TryRealEstate/assets/images/image%201.png'}
                tech="js node css"
                link="https://sean-code.github.io/TryRealEstate/"
                repo="https://github.com/sean-code/TryRealEstate"
              >
                <small>Built using HTML, and CSS</small>
                <p>
                  This project is a webpage that displays the business operations of a real estate company by the name of Vallie's Estate. 
                  This was my first ever project to test my UI skills and apply the basic HTML, CSS, and Figma design skills to practicality
                </p>
              </Project>
              <Project
                title="Car-Reviewing-Site"
                img={'https://i.ibb.co/sKBr6gh/Screenshot-from-2022-12-18-16-07-51.png'}
                tech="js d3 css"
                link="https://sean-code.github.io/Client-Car-Review-App/"
                repo="https://github.com/sean-code/Client-Car-Review-App"
              >
                <small>Built using React JS, , CSS, RubyOnRails(back-end)</small>
                <p>An application where users can view car ratings,average market price, used car inventory, market car reviews, search for a car and add a new car in the system</p>
              </Project>
            </div>
          </div>
        </section>
      );
}

export default Projects;