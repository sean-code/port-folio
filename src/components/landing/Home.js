import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Type } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profile from './assets/img/profile1.png';
import CV from './assets/John_Resume.pdf';
import './Home.css';


export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Full Stack Developer", "UI/UX Designer", "Open Source Contributor", "Bioinformatician"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }





  function handleLinker(){
    // router.push("/contact")
    console.log("Clicked");

  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 style={{fontSize:'30px'}}>{`Howdy, I'm John Nganga`}<br/></h1>
                <h1 style={{fontSize:'40px'}}><span className="txt-rotate" dataperiod="12000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p> <i>A tech-enthusiast who curates experience with technology</i>.</p>
                  <button className="resume">
                    <a
                      href='https://drive.google.com/file/d/18pGPXRJ6q3uEEAutw3o-cU9SiVVlRVK6/view?usp=sharing'
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
                    {/* <button onClick={() => console.log('connect')}> */}
                    <button onClick={() => handleLinker()}>
                      Let’s Connect <ArrowRightCircle size={27} />
                    </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profile} alt="Header Img"
                  style={{height:'360px', width: '360px', borderRadius: '50%'}} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}



// export function Home (){

//   return(
//     <section>

//     </section>
//   )
// }


