import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.css';
import { send } from "emailjs-com";
// import { response } from "express";


export const Contact = () => {
    const [sender_name1, set_sender_name1] = useState('');
    const [sender_name2, set_sender_name2] = useState('');
    const [sender_email, set_sender_email] = useState('');
    const [sender_phone, set_sender_phone] = useState('');
    const [message, set_message] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      send(
        'service_sp5wyz3',
        'template_9ve4a9b',
        {sender_name1, sender_name2, sender_phone, sender_email, message},
        'RNmyh5prDgdsS6W8n'
      )
      .then((response) => {
        console.log('message sent', response.status, response.text);
      })
      .catch((err) => {
        console.log('failed', err)
      })
      // Clear Form After Send
      set_sender_name1('');
      set_sender_name2('');
      set_sender_email('');
      set_sender_phone('');
      set_message('');
    }

    const handleName1 = (e) => {
      set_sender_name1(e.target.value)

    }
    const handleName2 = (e) => {
      set_sender_name2(e.target.value)
    }

    const handleEmail = (e) => {
      set_sender_email(e.target.value)
    }

    const handlePhone = (e) => {
      set_sender_phone(e.target.value)
    }
    const handleMessage = (e) => {
      set_message(e.target.value)
    }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="sender_name1" value={sender_name1} onChange={handleName1} placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="sender_name2" value={sender_name2} onChange={handleName2} placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="sender_email" value={sender_email} onChange={handleEmail} placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="sender_phone" value={sender_phone} onChange={handlePhone} placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={message} onChange={handleMessage} placeholder="Message"></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
