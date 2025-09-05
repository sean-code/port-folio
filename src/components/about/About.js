import 'react-multi-carousel/lib/styles.css';
import colorSharp from "./img/color-sharp.png";
import './About.css';
import Education from '../education/education';

export const About = () => {
  return (
    <section id="about" className="about" aria-label="About John Nganga Kangethe">
      <div className="container">
        <div className="row g-4">
          {/* Left: About copy */}
          <div className="col-12 col-lg-7">
            <div className="about-box">
              <h2 className="about-title">About Me</h2>
              <p className="about-blurb">
                I am John Nganga Kangethe, a USA-based <strong>Computer Science researcher</strong> and
                <strong> software engineer</strong> specializing in
                <strong> Machine Learning</strong>, <strong> Information Retrieval</strong>,
                <strong> Data Science</strong>, and <strong> Bioinformatics</strong>.
                My work bridges rigorous academic research with practical engineering—building
                research-grade prototypes and delivering production-ready systems. I value
                <em> clarity in evaluation, reliability,</em> and <em> interpretable results</em>.
              </p>

            </div>
          </div>

          {/* Right: Focus areas (stacks under on mobile) */}
          <div className="col-12 col-lg-5">
            <aside className="about-aside" aria-label="Focus areas">
              <h3 className="aside-title">Focus Areas</h3>
              <ul className="about-list">
                <li><strong>Engineering:</strong> Full stack applications, web3 development, regex detectors, UI/UX design, and scalable APIs &amp; microservices.</li>
                <li><strong>Research &amp; Data:</strong> Machine Learning, Information Retrieval, Bioinformatics, and applied Data Science.</li>
                <li><strong>Cloud &amp; Systems:</strong> Cloud infrastructure (Oracle), SQL/NoSQL databases, and CI/CD DevOps pipelines.</li>
                <li><strong>Cutting Edge:</strong> Transformers and emerging Mamba architectures, with a focus on reliable AI systems.</li>
              </ul>
            </aside>

          </div>
        </div>

        {/* Education block */}
        <div className="row">
          <div className="col-12">
            <div className="about-edu">
              <Education />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <img className="about-bg" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
