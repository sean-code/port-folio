import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "./img/color-sharp.png";
import "./Skills.css";

function SkillDial({ label, value, size = 120, stroke = 10 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  // ensure 100% shows a full ring (no seam); tiny epsilon for <100
  const isFull = value >= 99.5;
  const dash = isFull ? c : (value / 100) * c;

  return (
    <div className="dial" role="group" aria-label={`${label} ${value}%`}>
      <svg
        className="dial-svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          className="dial-track"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progress */}
        <circle
          className="dial-progress"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dash} ${c - dash}`}
          strokeLinecap={isFull ? "butt" : "round"}   // full ring looks cleaner with butt
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="dial-center">
        <div className="dial-value">{Math.round(value)}%</div>
        <div className="dial-label">{label}</div>
      </div>
    </div>
  );
}

export const Skills = () => {
  // Set to true to show as grid (no carousel)
  const AS_GRID = false;

  // Use crisp, senior categories + explicit proficiency
const SKILLS = [

  // Engineering
  { title: "Full Stack Development", value: 99 },
  { title: "Website Development", value: 99 },
  { title: "Regex / Detectors", value: 99 },
  { title: "UI/UX Design", value: 99 },
  { title: "APIs & Microservices", value: 90 },

    // Research & Data
  { title: "Machine Learning & AI", value: 90 },
  { title: "Information Retrieval", value: 90 },
  { title: "Bioinformatics / NLP", value: 95 },
  { title: "Data Science / Data Analysis", value: 90 },

  // Cloud & Systems
  { title: "Cloud Infrastructure (AWS / Oracle)", value: 88 },
  { title: "Database Systems (SQL/NoSQL)", value: 95 },
  { title: "CI/CD & DevOps", value: 85 },

  // Cutting Edge
  { title: "Transformers / Mamba Models", value: 85 },
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
                Research-driven and production-ready. These reflect consistent performance on real projects,
                code reviews, and measurable outcomes.
              </p>

              {AS_GRID ? (
                <div className="skills-grid">
                  {SKILLS.map((s, i) => (
                    <div className="skill-card" key={i}>
                      <SkillDial label={s.title} value={s.value} />
                    </div>
                  ))}
                </div>
              ) : (
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
                    <div className="skill-card" key={i}>
                      <SkillDial label={s.title} value={s.value} />
                    </div>
                  ))}
                </Carousel>
              )}

              {/* Optional: a small legend to ground the numbers */}
              <div className="skills-legend" aria-hidden="true">
                <span><i className="legend-dot dot-high" /> 90–99: expert</span>
                <span><i className="legend-dot dot-mid" /> 80–89: advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent image (decorative) */}
      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
