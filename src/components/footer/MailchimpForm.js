// Newsletter.jsx
import { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const QUOTES = useMemo(
    () => [
      "` The best error message is the one that never shows up. ` — Thomas Fuchs",
      "` Confusion is part of programming. ` — Felienne Hermans",
      "` There is always one more bug to fix. ` — Ellen Ullman",
      "` Bad code can be cleaned up. But it’s very expensive. ` — Robert C. Martin",
      "` Programming is learned by writing programs. `— Brian Kernighan",
    ],
    []
  );

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick a random quote (once per load)
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, [QUOTES]);

  // Split into text / author for nicer styling
  const dash = quote.lastIndexOf("—");
  const text = dash > -1 ? quote.slice(0, dash).trim().replace(/^"|"$/g, "") : quote;
  const author = dash > -1 ? quote.slice(dash + 1).trim() : "";

  return (
    <Col lg={12}>
      <section className="newsletter" aria-label="Featured quote">
        <Row className="justify-content-center">
          <Col xs={12}>
            <figure className="newsletter-bx" role="group" aria-roledescription="quote">
              <div className="nlr-accent" aria-hidden />
              <blockquote className="nlr-text">{text}</blockquote>
              {author && <figcaption className="nlr-author">— {author}</figcaption>}
              <div className="nlr-shine" aria-hidden />
            </figure>
          </Col>
        </Row>
      </section>
    </Col>
  );
};
