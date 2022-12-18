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
                <a href='https://www.linkedin.com/in/john-sean-kangethe/' target={'_blank'}>
                    <img src={linkedin} />
                </a>
                <a href='https://www.twitter.com/nganga_sea' target={"_blank"}>
                    <img src={twitter} />     
                </a>
                <a href='https://www.instagram.com/its_ngangasean' target={"_blank"}>
                    <img src={instagram} />
                </a>
                <a href="https://t.me/sean_code">
                    <img src ={mail} />
                </a>
            </div>
            <button className='btn-2'>
                Download CV
            </button>
        </div>
    )
}

export default Home;