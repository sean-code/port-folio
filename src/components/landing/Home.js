import './Home.css';
import display from './profile.jpeg';
import mail from './mail.svg';
import linkedin from './linkedin.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';


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
                <a href='https://www.linkedin.com/in/john-sean-kangethe/'>
                    <img src={linkedin} />
                </a>
                <a href='https://www.twitter.com/nganga_sea'>
                    <img src={twitter} />     
                </a>
                <a href='https://www.instagram.com/its_ngangasean'>
                    <img src={instagram} />
                </a>
                <img src ={mail} />
            </div>
        </div>
    )
}

export default Home;