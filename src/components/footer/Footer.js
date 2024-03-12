import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "./img/logo.jpg";
import github from "./img/github.svg"
import navIcon1 from "./img/nav-icon1.svg";
import twitter from "./img/twitter.svg";
import navIcon3 from "./img/nav-icon3.svg";
import telegram from "./img/mail.svg";
import './Footer.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" style={{width:'200px', height:'40px', borderRadius:'10px'}} /> */}
            <span className="logo-text">
              {/* Wrap each letter of the name in a span element */}
              <span>&lt;</span>
              <span>&nbsp;</span>
              <span>J</span>
              <span>o</span>
              <span>h</span>
              <span>n</span>
              <span>&nbsp;</span>
              <span>S</span>
              <span>e</span>
              <span>a</span>
              <span>n</span>
              <span>&nbsp;</span>
              <span>/</span>
              <span>&gt;</span>
            </span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://github.com/sean-code' target={"_blank"}><img src={github} /></a>
              <a href="https://www.linkedin.com/in/john-sean-nganga" target={'_blank'}><img src={navIcon1} alt="Icon" /></a>
              <a href='https://www.twitter.com/nganga_sea' target={"_blank"}><img src={twitter} alt="Icon" /></a>
              <a href="https://www.instagram.com/its_ngangasean" target={'_blank'}><img src={navIcon3} alt="Icon" /></a>
              <a href="https://t.me/sean_code" target={"_blank"}><img src={telegram} alt="Icon" /></a>
            </div>
            <p>© Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
