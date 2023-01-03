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
                <a href="https://github.com/sean-code?tab=repositories" target={"_blank"}>
                    most
                </a>
                {' '}of the projects I've worked on. Some
                were built during my coding adventure at {' '}
                <a href="https://moringaschool.com/courses/software-engineering-course-online/?https://moringaschool.com/courses/data-science-course/?utm_source=google&utm_medium=cpc&utm_campaign=Feb_6th_2023&gclid=CjwKCAiAkfucBhBBEiwAFjbkr7FtFZqC4cATG5O-KWDVsc6QfXXttLrolPaIpprkTTMbfDJeGJ43ihoC5KwQAvD_BwE" target="_blank">
                    Moringa School
                </a>
                , where I took coding for a year+ non-stop until I completed all the projects
                required to get my Software Engineering Certification.
              </p>
            </div>
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
                title="Movie Search + App"
                img={'https://previews.123rf.com/images/ylivdesign/ylivdesign1304/ylivdesign130400043/19244692-green-movie-logo-on-a-white-background.jpg'}
                tech="React js, react node"
                link="https://sean-code.github.io/Movie-Search/#/"
                repo="https://github.com/sean-code/Movie-Search"
              >
                <small>Built using React js, react node, OMDB, CSS, Bootstrap</small>
                <p>A website application that provides a user with the ability to search all categories of movies. 
                  The idea is to provide entertainment to the user. Furthermore, a user is able to compile a list of favorite movies. All of this among other amazing UI features are meant for entertainment. 
                  The Project was done for the purpose of learning and to grasp hands-on skills in website application development using React JS, and as well interaction with a 
                  public application programming interface as part of my Software Engineering journey.</p>
              </Project>

              <div className="projects-wrapper">
              <Project
                title="Personal Profile Card."
                img={'https://sean-code.github.io/profile-card/img/13A0A243-165A-43B5-8741-D2C1FD3DA9CA.jpg'}
                tech="React js, react node"
                link="https://sean-code.github.io/Movie-Search/#/"
                repo="https://github.com/sean-code/Movie-Search"
              >
                <small>
                  Built using HTML, CSS, SCSS, SASS
                </small>
                <p>
                  This is a personal profile card website that I created which lets the users check 
                  me out on Social Media platforms and even reach out to me via messaging.
                </p>
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
                img={'https://img.freepik.com/premium-vector/real-estate-logo_74869-159.jpg?w=740'}
                tech="js node css"
                link="https://sean-code.github.io/TryRealEstate/"
                repo="https://github.com/sean-code/TryRealEstate"
              >
                <small>Built using HTML, and CSS</small>
                <p>
                  This is a web application that displays the business operations of a real estate company by the name of Vallie's Estate. 
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

              <Project
                title="Superheroes API"
                img={'https://github.com/sean-code/Superheroes-Back-end/raw/main/imgs/heroes.png'}
                tech="Ruby on Rails, Postgres, Railway"
                link="https://theboys-production.up.railway.app/heroes"
                repo="https://github.com/sean-code/Superheroes-Back-end"
              >
                <small>Ruby on Rails, Postgres, Railway</small>
                <p>
                Here goes a rails API comprising heroes, hero_powers(joint table) and powers. The characters used are from the comic and Amazon Prime's TV show entitled THE BOYS.
                </p>
              </Project>
            </div>
          </div>
        </section>
      );
}

export default Projects;