import 'react-multi-carousel/lib/styles.css';
import colorSharp from "./img/color-sharp.png";
import './About.css';
import Education from '../education/education';



export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about" style={{marginBottom: '10%'}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About</h2>
                        <p>
                          Hello, I'm John S. Nganga Kangethe. I fell in love with programming and
                          started this career path.<br/>
                          Building a strong foundation of fundamental concepts and continuously practicing to
                          improve my skills helps me become a successful and confident software developer.
                        </p>
                        <h2>Education</h2>
                        <Education />
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
