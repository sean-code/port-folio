// Contact.jsx
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Email from "./img/Email.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [sender_name1, set_sender_name1] = useState("");
  const [sender_name2, set_sender_name2] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [sender_phone, set_sender_phone] = useState("");
  const [message, set_message] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      // Build payload for StaticForms
      const payload = {
        apiKey: "sf_cn3hb209d1537l50khfikda4",
        name: `${sender_name1} ${sender_name2}`.trim(),
        email: sender_email,
        phone: sender_phone,
        message,
        // Optional extras you can keep or remove:
        subject: "Portfolio Contact Form",
        // replyTo: "@", // makes replies go to the sender_email
        // honeyPot: "", // add a hidden input and pass here if you want
      };

      const resp = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (resp.ok) {
        toast.success("Successful! John will be in touch soon");
        // Clear form
        set_sender_name1("");
        set_sender_name2("");
        set_sender_email("");
        set_sender_phone("");
        set_message("");
      } else {
        // Try to read any error text for debugging
        try {
          const err = await resp.json();
          console.error("StaticForms error:", err);
        } catch { }
        toast.error("Not sent! Please try again later");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error connecting to server. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <ToastContainer />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={Email}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="sender_name1"
                          required
                          value={sender_name1}
                          onChange={(e) => set_sender_name1(e.target.value)}
                          placeholder="First Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="sender_name2"
                          required
                          value={sender_name2}
                          onChange={(e) => set_sender_name2(e.target.value)}
                          placeholder="Last Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="sender_email"
                          required
                          value={sender_email}
                          onChange={(e) => set_sender_email(e.target.value)}
                          placeholder="Email Address"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="sender_phone"
                          required
                          value={sender_phone}
                          onChange={(e) => set_sender_phone(e.target.value)}
                          placeholder="Phone No."
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          required
                          value={message}
                          onChange={(e) => set_message(e.target.value)}
                          placeholder="Message"
                        ></textarea>

                        <button type="submit" className="send-button" disabled={submitting}>
                          <span>{submitting ? "Sending..." : "Send"}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
