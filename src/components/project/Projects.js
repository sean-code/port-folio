import './Projects.css';


function Projects(){
    return (
      <>
        <main className='main-container'>
          <article>
            <h2 className='project-title'>My Works</h2>
            <section className="section-portfolio">
              <h2 className='project-subtitle'><i>My full stack projects so far...</i></h2>
              <div className="portfolio-container">
                <div className="card">
                  <div className="card-preview">
                    <img src="https://i.pinimg.com/564x/7e/c1/11/7ec111864f7539dce5362ccf235b61a4.jpg" alt="placeholder" className="card-preview__img" />
                  </div>
                  <div className="card-content">
                    <h4 className="card-content__title">Music Life+</h4>
                    <small>Built using HTML, db.json, JavaScript, CSS, Bootstrap</small>
                    <p className="card-content__text">A full-stack website application that allows a user to search for music lyrics and leave a review</p>
                    <div className='view-button'>
                      <p><a href="https://music-life-by-sean.netlify.app/" target="_blank">
                        View App
                        </a></p>
                      <p><a href="https://github.com/sean-code/Music-Life-Project" target="_blank">
                        View Repo
                        </a></p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://cdn.dribbble.com/users/1508697/screenshots/5982299/media/5f4678715c4592134ed1dafa26379695.png?compress=1&resize=400x300" alt="placeholder" className="card-preview__img" />
                    </div>
                  <div className="card-content">
                    <h4 className="card-content__title">Marvel Stars UI</h4>
                    <small>Built using JavaScript, SASS, HTML, CSS </small>
                    <p className="card-content__text">A website that displays professionally created UI inspired by my favorite Marvel's Avengers.</p>
                    <div className='view-button'>
                      <p>
                        <a href="https://sean-code.github.io/Marvel-UI/" target="_blank">
                        View App
                        </a>
                      </p>
                      <p>
                        <a href="https://github.com/sean-code/Marvel-UI/" target="_blank">
                        View Repo
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://i.pinimg.com/564x/81/b1/55/81b15579cdbbc14014b61dc0a52da142.jpg" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title"> Display Profile Card</h4>
                    <small>Built using HTML, CSS, SCSS, SASS</small>
                    <p className="card-content__text">A personal profile card website that I created which lets the users check 
                  me out on Social Media platforms and even reach out to me via messaging.</p>
                  <div className='view-button'>
                      <p><a href="https://sean-code.github.io/profile-card/" target="_blank">
                        View App
                      </a></p>
                      <p><a href="https://github.com/sean-code/profile-card" target="_blank">
                        View Repo
                      </a></p>
                  </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://i.pinimg.com/564x/23/d3/56/23d356ae859cc121d6a2de86fa5fce87.jpg" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title">Movie Search App</h4>
                    <small>Built using React js, react node, OMDB, CSS, Bootstrap</small>
                    <p className="card-content__text">A website application that provides a user with the ability to search all categories of movies. 
                  The idea is to provide entertainment to the user.</p>
                  <div className='view-button'>
                      <p><a href="https://sean-code.github.io/Movie-Search/#/" target="_blank">
                        View App
                        </a>
                      </p>
                      <p><a href="https://github.com/sean-code/Movie-Search" target="_blank">
                        View Repo
                        </a>
                      </p>
                  </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://i.pinimg.com/564x/dc/92/23/dc9223bee87ae7104f2db4a91afbe158.jpg" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title">Tic Tac Game</h4>
                    <small>Built using React JS, CSS </small>
                    <p className="card-content__text">
                    A classic game that contributes to children's developmental growth in numerous ways including their understanding of predictability and problem solving.</p>
                    <div className='view-button'>
                      <p><a href="https://sean-code.github.io/tic-tac/" target="_blank">
                        View App
                        </a></p>
                      <p><a href="https://github.com/sean-code/tic-tac/" target="_blank">
                        View Repo
                        </a></p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://i.pinimg.com/564x/35/5b/a4/355ba4b30a8b11e819fc8cccc128e72f.jpg" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title">Vallie's Estate</h4>
                    <small>Built using HTML, and CSS</small>
                    <p className="card-content__text">A web application that displays the business operations of a real estate company by the name of Vallie's Estate.</p>
                    <div className='view-button'>
                      <p><a href="https://sean-code.github.io/TryRealEstate/" target="_blank">
                        View App
                        </a></p>
                      <p><a href="https://github.com/sean-code/TryRealEstate" target="_blank">
                        View Repo
                      </a></p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Q2Fyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title">Car-Reviewing-Site</h4>
                    <small>Built using React JS, , CSS, RubyOnRails(back-end)</small>
                    <p className="card-content__text">An application where users can view car ratings,average market price, used car inventory, market car reviews, search for a car and add a new car in the system</p>
                    <div className='view-button'>
                      <p><a href="https://sean-code.github.io/cars/" target="_blank">
                        View App
                        </a></p>
                      <p><a href="https://github.com/sean-code/cars" target="_blank">
                        View Repo
                      </a></p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-preview">
                    <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmFja2VuZCUyMGFwcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title">Superheroes API</h4>
                    <small>Ruby on Rails, Postgres, Railway</small>
                    <p className="card-content__text">An API comprising superheroes and their powers. The characters used are from the Amazon Prime's TV show entitled THE BOYS.
                    This data is displayed in form of JSON</p>
                    <div className='view-button'>
                      <p>
                        <a href="https://theboys-production.up.railway.app/heroes" target="_blank">
                          View App
                        </a>
                      </p>
                      <p>
                        <a href="https://github.com/sean-code/Superheroes-Back-end" target="_blank">
                          View Repo
                        </a>
                      </p>
                    </div>
                  </div>
                </div>


                <div className="card">
                  <div className="card-preview">
                    <img src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8QmFja2VuZCUyMEFQSXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="placeholder" className="card-preview__img" /></div>
                  <div className="card-content">
                    <h4 className="card-content__title">Cars API</h4>
                    <small>Ruby on Rails, Postgres, Railway</small>
                    <p className="card-content__text">
                    A backend created from scratch. It contains hundreds of cars with their reviews and ratings. The data is displayed in form of JSON. It can be consumed using any kind of Frontend</p>
                    <div className='view-button'>
                      <p><a href="https://carreview-production.up.railway.app/cars" target="_blank">
                        View App
                        </a></p>
                      <p><a href="https://github.com/sean-code/carreview" target="_blank">
                        View Repo
                        </a></p>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </article>
        </main>
      </>
      );
}

export default Projects;