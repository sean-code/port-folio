import 'react-multi-carousel/lib/styles.css';
import colorSharp from "./img/color-sharp.png"



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
    <section className="skill" id="skills" style={{marginBottom: '10%'}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About</h2>
                        <p>
                          Hello, I'm John S. Nganga Kangethe. I fell in love with programming and
                          started this career path.<br />I now curate experiences with technology
                        </p>
                        <h2>Education</h2>
                          <li>Bachelor of Technology</li>
                          <li>Diploma Computer Science</li>
                          <li>Cert. Software Engineering</li>
                          <li>Cert. Network Fundamentals</li>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
