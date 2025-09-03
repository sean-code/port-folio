import { Container, Row, Col, Tab, Nav, Badge } from "react-bootstrap";
import colorSharp2 from "./img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Languages.css";

// Icons
import {
  // Frontend
  SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiAngular, SiHtml5, SiCss3, SiSass, SiBootstrap, SiVuetify, SiFigma, SiMiro,
  // Backend
  SiNodedotjs, SiPython, SiFastapi, SiFlask, SiRubyonrails, SiRuby,
  // Data & Infra
  SiPostgresql, SiMysql, SiSqlite, SiPrisma, SiSequelize, SiDocker, SiAmazonaws, SiFirebase, SiPlanetscale, SiRailway,
  // Tools & Platforms
  SiGithub, SiVercel, SiNetlify, SiMicrosoftazure, SiUbuntu, SiWindows, SiMacos, SiVisualstudio, SiAdobeindesign, SiHeroku,
  // ML/AI & DS (these exist in react-icons)
  SiPandas, SiNumpy, SiScikitlearn, SiJupyter
} from "react-icons/si";

function TechCard({ icon: Icon, label, badge }) {
  return (
    <Col xs={6} sm={4} md={3} lg={2} className="tech-col">
      <div className="tech-card" role="group" aria-label={label} tabIndex={0}>
        <div className="tech-icon-wrap" aria-hidden="true">
          <Icon className="tech-icon" />
        </div>
        <div className="tech-label">{label}</div>
        {badge && <Badge bg="secondary" className="tech-badge">{badge}</Badge>}
      </div>
    </Col>
  );
}

export const Languages = () => {
  // DATA — tidy, grouped, and easy to extend
  const PANES = {
    mlai: {
      title: "ML / AI",
      items: [
        { icon: SiPython, label: "Python" },
        { icon: SiScikitlearn, label: "scikit-learn" },
        { icon: SiPandas, label: "pandas" },
        { icon: SiNumpy, label: "NumPy" },
        { icon: SiJupyter, label: "Jupyter" },
        { icon: SiFastapi, label: "FastAPI (serving)" }
      ]
    },
    frontend: {
      title: "Frontend",
      items: [
        { icon: SiJavascript, label: "JavaScript" },
        { icon: SiTypescript, label: "TypeScript" },
        { icon: SiReact, label: "React" },
        { icon: SiVuedotjs, label: "Vue" },
        { icon: SiAngular, label: "Angular" },
        { icon: SiHtml5, label: "HTML5" },
        { icon: SiCss3, label: "CSS3" },
        { icon: SiSass, label: "Sass" },
        { icon: SiBootstrap, label: "Bootstrap" },
        { icon: SiVuetify, label: "Vuetify" },
        { icon: SiFigma, label: "Figma", badge: "Design" },
        { icon: SiMiro, label: "Miro", badge: "Collab" }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { icon: SiNodedotjs, label: "Node.js" },
        { icon: SiPython, label: "Python" },
        { icon: SiFastapi, label: "FastAPI" },
        { icon: SiFlask, label: "Flask" },
        { icon: SiRuby, label: "Ruby" },
        { icon: SiRubyonrails, label: "Rails" },
        { icon: SiPrisma, label: "Prisma ORM", badge: "Preferred" },
        { icon: SiSequelize, label: "Sequelize ORM" }
      ]
    },
    datainfra: {
      title: "Data & Infra",
      items: [
        { icon: SiPostgresql, label: "PostgreSQL" },
        { icon: SiMysql, label: "MySQL" },
        { icon: SiSqlite, label: "SQLite" },
        { icon: SiPlanetscale, label: "PlanetScale" },
        { icon: SiFirebase, label: "Firebase" },
        { icon: SiRailway, label: "Railway" },
        { icon: SiDocker, label: "Docker" },
        { icon: SiAmazonaws, label: "AWS" }
      ]
    },
    tools: {
      title: "Tools & Platforms",
      items: [
        { icon: SiGithub, label: "GitHub", badge: "OSS" },
        { icon: SiVercel, label: "Vercel" },
        { icon: SiNetlify, label: "Netlify" },
        { icon: SiHeroku, label: "Heroku" },
        { icon: SiMicrosoftazure, label: "Azure" },
        { icon: SiUbuntu, label: "Ubuntu" },
        { icon: SiWindows, label: "Windows" },
        { icon: SiMacos, label: "macOS" },
        { icon: SiVisualstudio, label: "VS Code" },
        { icon: SiAdobeindesign, label: "InDesign" }
      ]
    }
  };

  return (
    <section className="project" id="tools" aria-label="Tools and Languages">
      <Container className="tools-container">
        <Row>
          <Col xs={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Tools & Languages</h2>
                  <p className="tools-blurb">
                    The instruments I use to turn research ideas into reliable systems.
                  </p>

                  <Tab.Container id="stack-tabs" defaultActiveKey="mlai">
                    <Nav variant="pills" className="nav-pills justify-content-center align-items-center">
                      <Nav.Item><Nav.Link eventKey="mlai">ML/AI</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="frontend">Frontend</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="backend">Backend</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="datainfra">Data & Infra</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="tools">Tools & Platforms</Nav.Link></Nav.Item>
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {Object.entries(PANES).map(([key, pane]) => (
                        <Tab.Pane eventKey={key} key={key} tabIndex={0} aria-label={pane.title}>
                          <Row className="g-3 g-sm-4 justify-content-center">
                            {pane.items.map((it, i) => (
                              <TechCard key={i} icon={it.icon} label={it.label} badge={it.badge} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  );
};
