import './Projects.css';
import { Container, Row, Col } from 'reactstrap';


function Project(){



  const handleLinkClick = (e) => {
    e.preventDefault();
    const confirmation = window.confirm("Are you sure you want to access this link?");
    if (confirmation) {
      window.open(e.target.href, "_blank");
    }
  };

  const consentClick = (e) => {
    e.preventDefault();
    const confirmation = window.confirm("Please do not access the project for maliciuous use. Unauthorized cloning and/or malicious use is subject to prosecution!!");
    if (confirmation) {
      window.open(e.target.href, "_blank");
    }
  };

    return (
      <>
      <main>


      <div className='main-main' id='projects'>
        <h1 className='project-title'>Projects</h1>
        <Container className='main-container'>
          {/* <Row style={{marginLeft:'200px'}}> */}
          <Row style={{marginLeft:'200px'}} className='row'>
            <Col md='4' sm='6'>
              <div className="card">
                      <div className="card-preview">
                        <img src="https://media.istockphoto.com/id/1287186696/photo/food-delivery-app-order-with-phone-online-mobile-service-for-take-away-burger-and-pizza.jpg?b=1&s=170667a&w=0&k=20&c=rpyHqkxeuH5P4xdFFcvE-bjet3GMdGo7qwUoswFwlXU=&resize=400x250" alt="placeholder" className="card-preview__img" />
                      </div>
                      <div className="card-content">
                        <h4 className="card-content__title">Vitamu Meals App</h4>
                        <small>Built using JavaScript, SCSS, HTML</small>
                        <p className="card-content__text">An application professionally created to allow its users
                        view and order meals from Vitamu Meals Restaurant</p>
                        <div className='view-button'>
                        <p>
                          <a href="https://sean-code.github.io/Vitamu-Foods/" target="_blank"  onClick={handleLinkClick}>
                          View App
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/sean-code/Vitamu-Foods/tree/main" target="_blank" onClick={consentClick}>
                          View Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
              <div className="card">
                      <div className="card-preview">
                        <img src="https://media.istockphoto.com/id/1466409042/photo/woman-donating-by-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=52KF9Y2fNQ1ReA7nTct75JXbc55ZsCJooCTzaY1dNos=" alt="placeholder" className="card-preview__img" />
                      </div>
                      <div className="card-content">
                        <h4 className="card-content__title">French Community</h4>
                        <small>Built using ReactJs, emailJS, MailChimp</small>
                        <p className="card-content__text">A website application connecting users and visitors
                        to a french society based in Nairobi</p>
                        <div className='view-button'>
                        <p>
                          <a href="https://sean-code.github.io/french-community/" target="_blank" onClick={handleLinkClick}>
                            View App
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/sean-code/french-community/tree/cascade" target="_blank" onClick={consentClick}>
                            View Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
              <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/467103541/photo/car-rental-sign.jpg?s=612x612&w=0&k=20&c=pjd-9j9Q2SttZHyARb7VEnWMRvA3XHgywGg7gwIq3vQ=" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Car Rental</h4>
                      <small>Built using React JS, CSS, Ruby On Rails</small>
                      <p className="card-content__text">Full stack application that users can hire cars and make payments via Debit Card/M-Pesa</p>
                      <div className='view-button'>
                        <p><a href="http://sean-code.github.io/cars-website" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a></p>
                        <p><a href="https://github.com/sean-code/cars-website" target="_blank" onClick={consentClick}>
                          View Repo
                        </a></p>
                      </div>
                    </div>
                  </div>
            </Col>


            <Col md='4' sm='6'>
              <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1191380434/vector/shopping.jpg?s=612x612&w=0&k=20&c=ZeXBVhp4PbsylkDMXai_5UBOmz-sbB1RAU5-JxUPGrI=" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">XO Commerce Store</h4>
                      <small>Built using Vuetify, Vue, Firebase, Tailwind CSS </small>
                      <p className="card-content__text">An Online E-commerce Store that Emulates Jumia, has Authentication system, Item Search, Cart Functionality, and Seamless Payment System</p>
                      <div className='view-button'>
                        <p><a href="https://xo-commerce.vercel.app/" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a></p>
                        <p><a href="https://github.com/sean-code/Xo-Commerce" target="_blank" onClick={consentClick}>
                          View Repo
                        </a></p>
                      </div>
                    </div>
                  </div>
            </Col>


            <Col md='4' sm='6'>
            <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1131809387/photo/concept-online-payment-mobile-technology-hand-of-female-using-smartphone-touching-pay-button.jpg?s=612x612&w=0&k=20&c=i_xw7yOo7n2bnzPqlgifipyiaI5vcbcK5E8-09XObwg=" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">103 e-Commerce Store</h4>
                      <small>Built using Vue, SASS, Tailwind CSS</small>
                      <p className="card-content__text">Digital platform that enables users to browse and purchase products or services directly from their mobile devices or computers. It provides a convenient and user-friendly interface for customers to explore</p>
                      <div className='view-button'>
                        <p><a href="https://vue-103.vercel.app/" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a></p>
                        <p><a href="https://github.com/sean-code/Vue-103-shop" target="_blank" onClick={consentClick}>
                          View Repo
                        </a></p>
                      </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
                <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1223790224/photo/interface-of-video-distribution-service-subscription-service-streaming-video-communication.jpg?s=612x612&w=0&k=20&c=h854WiwSGwreSAGHhJWA-rSHjgjGKXI5C2JE_QzgGDM=" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Movie Search App</h4>
                      <small>Built using React js, Redux, react node, OMDB, CSS, Bootstrap</small>
                      <p className="card-content__text">A website application that provides a user with the ability to search all categories of movies</p>
                    <div className='view-button'>
                        <p><a href="https://sean-code.github.io/scholathon/#/" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a>
                        </p>
                        <p><a href="https://github.com/sean-code/Movie-Search" target="_blank" onClick={consentClick}>
                          View Repo
                          </a>
                        </p>
                    </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
              <div className="card">
                <div className="card" style={{padding: '200px'}}>
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1371000384/photo/model-homes-home-loans-home-equity-loans-home-model-insurance-and-a-pen-on-the-table-to-plan.jpg?s=612x612&w=0&k=20&c=mG6en8p_CVh8IMIovhB11KC0nQFYlyxjIV7e7S6Q2g0=" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Vallie's Estate</h4>
                      <small>Built using HTML, SCSS, Figma</small>
                      <p className="card-content__text">Website Application that displays the business operations of a real estate company by the name Vallie's Estate.</p>
                      <div className='view-button'>
                        <p><a href="https://sean-code.github.io/TryRealEstate/" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a></p>
                        <p><a href="https://github.com/sean-code/TryRealEstate" target="_blank" onClick={consentClick}>
                          View Repo
                        </a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>

            <Col md='4' sm='6'>
              <div className="card">
                <div className="card">
                    <div className="card-preview">
                      <img src="https://cdn.dribbble.com/users/1508697/screenshots/5982299/media/5f4678715c4592134ed1dafa26379695.png?compress=1&resize=400x250" alt="placeholder" className="card-preview__img" />
                      </div>
                    <div className="card-content">
                      <h4 className="card-content__title">Marvel Stars UI</h4>
                      <small>Built using JavaScript, SASS, HTML, CSS </small>
                      <p className="card-content__text">Displays professionally created UI, adopted from Avengers, Marvel's comic </p>
                      <div className='view-button'>
                        <p>
                          <a href="https://sean-code.github.io/Marvel-UI/" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/sean-code/Marvel-UI/" target="_blank" onClick={consentClick}>
                          View Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>
            <Col md='4' sm='6'>
              <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1412860559/photo/woman-playing-tic-tac-toe-game-on-green-chalkboard-top-view.jpg?s=612x612&w=0&k=20&c=RUrmvRAbQqXPBdC8EnksBQZYzxjx9sznfDTy3Jkyqkk=&resize=30x90" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Tic Tac Game</h4>
                      <small>Built using React JS, CSS </small>
                      <p className="card-content__text">
                      A classic game that contributes to children's developmental growth </p>
                      <div className='view-button'>
                        <p><a href="https://sean-code.github.io/tic-tac/" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a></p>
                        <p><a href="https://github.com/sean-code/tic-tac/" target="_blank" onClick={consentClick}>
                          View Repo
                          </a></p>
                      </div>
                    </div>
                </div>
            </Col>

            <Col md='4' sm='6'>
            <div className="card">
                    <div className="card-preview">
                      <img src="https://images.unsplash.com/photo-1556707752-481d500a2c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXJoZXJvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Superheroes API</h4>
                      <small>Ruby on Rails, Postgres, Railway</small>
                      <p className="card-content__text">An API comprising superheroes and their powers, adopted from TV show THE BOYS
                      </p>
                      <div className='view-button'>
                        <p>
                          <a href="https://theboys-production.up.railway.app/heroes" target="_blank" onClick={handleLinkClick}>
                            View App
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/sean-code/Superheroes-Back-end" target="_blank" onClick={consentClick}>
                            View Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
                <div className="card">
                    <div className="card-preview">
                      <img src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8QmFja2VuZCUyMEFQSXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Cars API</h4>
                      <small>Ruby on Rails, Postgres, Railway</small>
                      <p className="card-content__text">
                      A backend that contains hundreds of cars with their reviews and ratings. The data is displayed in form of JSON. It can be consumed using any kind of Frontend</p>
                      <div className='view-button'>
                        <p><a href="https://carreview-production.up.railway.app/cars" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a></p>
                        <p><a href="https://github.com/sean-code/carreview" target="_blank" onClick={consentClick}>
                          View Repo
                          </a></p>
                      </div>
                    </div>
                </div>
            </Col>
            <Col md='4' sm='6'>
            <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1446047204/photo/user-buying-movie-tickets-online.jpg?b=1&s=170667a&w=0&k=20&c=Dq98OAYI13Ba1b8NXdVotWPqsAonxb61s-q0prfHArc=" alt='ticket-thumbnail'/>
                    </div>
                    <div className="card-content">
                      <h4 className="card-content__title">Cinema Tickets API</h4>
                      <small>Built using Ruby on Rails, Procfile, Sinatra, Railway </small>
                      <p className="card-content__text">A backend that allows users to book tickets for the current showing movies at a local movie theater</p>
                      <div className='view-button'>
                        <p>
                          <a href="https://theater-production.up.railway.app/movies" target="_blank" onClick={handleLinkClick}>
                          View App
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/sean-code/Theater" target="_blank" onClick={consentClick}>
                          View Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
              <div className="card">
                      <div className="card-preview">
                        <img src="https://media.istockphoto.com/id/1391720775/photo/woman-using-computer-on-table-with-new-email-message-on-laptop-communication-connection.jpg?b=1&s=170667a&w=0&k=20&c=wsQQvAn0UujKadfw5OVNikLGc_r4-o9ee1l63iXdhh4=" alt="placeholder" className="card-preview__img" /></div>
                      <div className="card-content">
                        <h4 className="card-content__title">Personal Notes API</h4>
                        <small>Built using Ruby on Rails, PostgreSQL</small>
                        <p className="card-content__text">An API that allows users to create, read, update and delete notes.
                        It has a login system, where users can register and log in, and the notes are saved to a PostgreSQL database</p>
                        <div className='view-button'>
                          {/* <p><a href="https://github.com/sean-code/scholathon-notes-backend/" target="_blank">
                          View App
                          </a></p> */}
                        <p><a href="https://github.com/sean-code/scholathon-notes-backend/" target="_blank" onClick={consentClick}>
                          View Repo
                        </a></p>
                      </div>
                    </div>
                  </div>
            </Col>

            <Col md='4' sm='6'>
              <div className="card">
                    <div className="card-preview">
                      <img src="https://media.istockphoto.com/id/1391720775/photo/woman-using-computer-on-table-with-new-email-message-on-laptop-communication-connection.jpg?b=1&s=170667a&w=0&k=20&c=wsQQvAn0UujKadfw5OVNikLGc_r4-o9ee1l63iXdhh4=" alt="placeholder" className="card-preview__img" /></div>
                    <div className="card-content">
                      <h4 className="card-content__title">Personal Notes API</h4>
                      <small>Built using Ruby on Rails, PostgreSQL</small>
                      <p className="card-content__text">An API that allows users to create, read, update and delete notes.
                      It has a login system, where users can register and log in, and the notes are saved to a PostgreSQL database</p>
                      <div className='view-button'>
                        {/* <p><a href="https://github.com/sean-code/scholathon-notes-backend/" target="_blank">
                          View App
                          </a></p> */}
                        <p><a href="https://github.com/sean-code/scholathon-notes-backend/" target="_blank" onClick={consentClick}>
                          View Repo
                        </a></p>
                      </div>
                    </div>
                  </div>
            </Col>

            {/* <Col md='4' sm='6'>
              <div className="card">

              </div>
            </Col> */}

            </Row>

        </Container>
      </div>
      </main>
    </>
      );
}

export default Project;
