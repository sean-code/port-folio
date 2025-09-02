import meter1 from "./img/meter1.svg";
import meter2 from "./img/meter2.svg";
import meter3 from "./img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "./img/color-sharp.png";
import "./Skills.css";

export const Skills = () => {
  const SKILLS = [
    { title: "Machine Learning", meter: meter1 },
    { title: "Information Retrieval", meter: meter2 },
    { title: "Bioinformatics / NLP", meter: meter3 },
    { title: "Full-Stack (Vue/Node)", meter: meter1 },
    { title: "Data Analysis", meter: meter2 },
    { title: "Testing & QA", meter: meter3 },
    { title: "Regex / Detectors", meter: meter1 },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1600 }, items: 4 },
    desktop:           { breakpoint: { max: 1600, min: 1024 }, items: 3 },
    tablet:            { breakpoint: { max: 1024, min: 640  }, items: 2 },
    mobile:            { breakpoint: { max: 640,  min: 0    }, items: 1 },
  };

  return (
    <section className="skill" id="skills" aria-label="Skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="skills-title">Skills</h2>
              <p className="skills-blurb">
                Research-oriented and production-ready: I combine experimental rigor with
                dependable engineering to ship interpretable, reliable systems.
              </p>

              <Carousel
                responsive={responsive}
                infinite
                swipeable
                draggable
                keyBoardControl
                autoPlay={false}
                containerClass="skill-slider"
                itemClass="skill-slide"
                customTransition="transform 450ms ease"
                transitionDuration={450}
                renderButtonGroupOutside
                arrows
                additionalTransfrom={0}
                ariaLabel="Skill carousel"
              >
                {SKILLS.map((s, i) => (
                  <div className="skill-card" key={i} role="group" aria-label={s.title}>
                    <div className="skill-meter-wrap">
                      <img src={s.meter} alt="" className="skill-meter" />
                    </div>
                    <h5 className="skill-name">{s.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent image (decorative) */}
      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
