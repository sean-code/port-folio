import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './assets/img/logo.jpg';
import navIcon1 from './assets/img/nav-icon1.svg';
import twitter from './assets/img/twitter.svg';
import telegram from './assets/img/mail.svg';
import instagram from './assets/img/nav-icon3.svg';
import github from './assets/img/github.svg'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>


          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#tools" className={activeLink === 'tools' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tools')}>Tools</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href='https://github.com/sean-code' target={"_blank"}>
                  <img src={github} alt="github" />
                </a>
                <a href="https://https://www.linkedin.com/in/johnkangethe" target={'_blank'}>
                  <img src={navIcon1} alt="linkedin" />
                </a>
                <a href='https://www.twitter.com/nganga_sea' target={"_blank"}>
                  <img src={twitter} alt="twitter" />
                </a>
                <a href='https://www.instagram.com/its_ngangasean' target={"_blank"}>
                  <img src={instagram} alt="instagram-johnkangethe" />
                </a>
                <a href="https://t.me/sean_code" target={"_blank"}><img src={telegram} alt="telegram" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contact Me</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
