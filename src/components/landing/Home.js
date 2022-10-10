import './Home.css';
import display from './profile.jpeg';

function Home(){
    return(
        <div className='Home'>
            <div className='home-image'>
                <img src={display} alt='display-photo'/>
            </div>
            <div className='Details'>
                <h1>Howdy, I'm <span>John Nganga</span></h1>
                <h3>
                    Here goes my official portfolio page.<br />
                    I'm a tech-enthusiast who curates experiences with technology
                </h3>
            </div>
        </div>
    )
}

export default Home;