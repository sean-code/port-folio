import { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import profile from "./assets/img/profile1.png";
import CV from "./assets/John_Resume.pdf";
import "./Home.css";
import Skeleton from "@mui/material/Skeleton";
import RoleTypewriter from "../roles/RolesRotator.jsx";

export const Home = () => {
  // Future-proof, researcher-first roles
  const roles = useMemo(
    () => [
      "Graduate Researcher",
      "Full Stack Engineer",
      "Information Retrieval Specialist",
      "Bioinformatics NLP",
      "Open Source Contributor"
    ],
    []
  );

  const [imageLoaded, setImageLoaded] = useState(false);

  function handleConnect() {
    window.location.href =
      "mailto:ngangajohn536@gmail.com?subject=Let’s%20Connect";
  }

  return (
    <section className="banner" id="home" aria-label="Home / Landing">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>

                  <h1 style={{ fontSize: '30px' }}>{`Howdy, I'm John Nganga`}<br /></h1>

                  <h2 className="hero-role" style={{ fontSize: '40px' }}>
                    <RoleTypewriter
                      style={{ fontSize: '30px' }}
                      items={roles}
                      typeSpeed={70}
                      deleteSpeed={45}
                      holdTime={900}
                    />
                  </h2>

                  <p className="hero-blurb">
                    I am a CS researcher and software engineer specializing in <strong>Machine Learning</strong>, 
                    <strong> Deep Learning</strong>, <strong> Information Retrieval</strong>, <strong>Data Analysis</strong>, and <strong>AI</strong>.
                  </p>

                  <div className="cta-row" role="group" aria-label="Primary actions">
                    <button className="resume">
                      <a
                        href='https://drive.google.com/file/d/16SCZUk74ZRAqRLFvqdGMCvmE_nqwsUSF/view?usp=sharing'
                        target='_blank'
                        style={{ 'fontSize': '16px' }}
                        className="home_button"
                      >
                        View Resume
                      </a>
                      <a
                        href={CV}
                        download
                        target='_blank'
                        style={{ 'fontSize': '16px' }}
                        className="home_button"
                      >
                        Download Resume
                      </a>
                    </button>
                    <button
                      type="button"
                      onClick={handleConnect}
                      className="btn linkish"
                    >
                      Let’s Connect <ArrowRightCircle size={35} aria-hidden />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {!imageLoaded && (
                    <Skeleton variant="circular" width={360} height={360} animation="wave" />
                  )}
                  <img
                    src={profile}
                    alt="SeanImg"
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      display: imageLoaded ? 'block' : 'none',
                      height: '360px',
                      width: '360px',
                      borderRadius: '50%',
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
