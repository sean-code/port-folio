import './Home.css';
import display from './profile.jpeg';

function Home(){
    return(
        <div className='Home'>
            <div className='home-image'>
                <img src={display} alt='display-photo'/>
            </div>
        </div>
    )
}

export default Home;