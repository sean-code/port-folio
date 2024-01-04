import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Email from "./img/Email.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.css';
import { send } from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        // alert("Message Was Successfully Sent"); Transition from using Alert to using Toastification
        console.log('message sent', response.status, response.text);
        toast.success("Success! Nganga will be in touch soon");

      })
      .catch((err) => {
        console.log('failed', err)
        toast.error("Not sent! Please try again later")
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
      <ToastContainer />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={Email} alt="Contact Us" />
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
                      <input type="text" name="sender_name1" required value={sender_name1} onChange={handleName1} placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="sender_name2" required value={sender_name2} onChange={handleName2} placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="sender_email" required value={sender_email} onChange={handleEmail} placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="sender_phone" required value={sender_phone} onChange={handlePhone} placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" required value={message} onChange={handleMessage} placeholder="Message"></textarea>
                      <button type="submit" className="send-button"><span>Send</span></button>
                    </Col>
                    <ToastContainer />
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
