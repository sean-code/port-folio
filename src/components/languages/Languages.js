import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "./img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Languages.css';
import {
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiReact, SiVuedotjs, SiAngular,
  SiTypescript, SiSass, SiRuby, SiRubyonrails, SiPython, SiFlask,
  SiSqlite, SiPostgresql, SiMysql, SiFigma, SiMiro, SiAdobeindesign,
  SiUbuntu, SiWindows, SiMacos, SiGithub, SiNetlify,
  SiHeroku, SiVercel, SiMicrosoftazure
} from 'react-icons/si'


export const Languages = () => {
  return (
    <section className="project" id="tools">
      <Container style={{backgroundColor:'#151515', borderRadius:'70px', padding:'8%'}}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2> Tools and Languages </h2>
                <p>My programming languages proficiency, tools, and professional skillset includes and/or not limited to:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                                {/* Display Tabs */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiJavascript />
                          <p>Javascript</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons"> 
                          <SiHtml5 />
                          <p>HTML5</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiCss3 />
                          <p>CSS3</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiBootstrap />
                          <p>Bootstrap</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiSass />
                          <p>SASS</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiReact />
                          <p>React JS</p>
                        </Col>
                      </Row>
                      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiVuedotjs />
                          <p>Vue</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiAngular />
                          <p>Angular</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiTypescript />
                          <p>Typescript</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiFigma />
                          <p>Figma</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiMiro />
                          <p>Miro</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiAdobeindesign />
                          <p>Adobe Design</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                                    {/* Second Tab */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiRuby />
                          <p>Ruby</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiRubyonrails />
                          <p>Ruby on Rails</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiPython />
                          <p>Python</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiFlask />
                          <p>Flask</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiSqlite />
                          <p>SQLITE3</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiPostgresql />
                          <p>PostgreSQL</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiMysql />
                          <p>MYSQL</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                                    {/* Third tab */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiUbuntu />
                          <p>Ubuntu</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiWindows />
                          <p>Windows</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiMacos />
                          <p>Mac OS</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiGithub />
                          <p>GitHub</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiNetlify />
                          <p>Netlify</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiHeroku />
                          <p>Heroku</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiVercel />
                          <p>Vercel</p>
                        </Col>
                        <Col xs={3} md={4} lg={true} className="tech-icons">
                          <SiMicrosoftazure />
                          <p>Microsoft Azure</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
