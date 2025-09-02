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
    <section className="skill" id="about" style={{ marginBottom: '10%' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                I am John Nganga Kangethe, a <strong>Computer Science Researcher</strong> and <strong>Software Engineer</strong> specializing in
                <strong> Machine Learning</strong>, <strong>Information Retrieval</strong>, <strong>Data Science,</strong> and
                <strong> Bioinformatics</strong>. My work bridges rigorous academic research with
                practical engineering, where I design research-grade prototypes and deploy
                production systems. I am motivated by curiosity, problem solving, and a commitment
                to building reliable and interpretable technologies.
              </p>

              {/* <Education /> */}
            </div>
            <div>
              <Education />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
