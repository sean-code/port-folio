import './Home.css';
import display from './profile.jpeg';
import mail from './mail.svg';
import linkedin from './linkedin.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import Type from './Type';


function Home(){
    return(
        <>
            {/* dust particles */}

            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>

            {/* Rest of Page */}
            <div className='Home'>
                <div className='home-image'>
                    <img src={display} alt='display-photo'/>
                </div>
                <div className='Details'>
                    <h1>Howdy, I'm <span>John Nganga</span></h1>
                        <Type />
                    <h3>
                        <i>A tech-enthusiast who curates experience with technology</i>
                    </h3>
                    <a href='https://www.linkedin.com/in/john-sean-kangethe/' target={'_blank'}>
                        <img src={linkedin} alt='img'/>
                    </a>
                    <a href='https://www.twitter.com/nganga_sea' target={"_blank"}>
                        <img src={twitter} alt='img' />     
                    </a>
                    <a href='https://www.instagram.com/its_ngangasean' target={"_blank"}>
                        <img src={instagram} alt='img' />
                    </a>
                    <a href="https://t.me/sean_code" target={"_blank"}>
                        <img src ={mail} alt='img' />
                    </a>
                </div>
                <button className='btn-2'>
                    <a href='https://docs.google.com/document/d/1LrfTMyCT-S8DgPljuiC2jGwIC10wyReFbGF-a8QlWRU/edit?usp=sharing' target='_blank'>
                        View Resume
                    </a>
                </button>
            </div>
        </>
    )
}

export default Home;