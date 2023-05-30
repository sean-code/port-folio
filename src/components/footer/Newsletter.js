// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";

// export const Newsletter = ({ status, message, onValidated }) => {
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (status === 'success') clearFields();
//   }, [status])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     email &&
//     email.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email
//     })
//   }



//   const clearFields = () => {
//     setEmail('');
//   }
//   return (
//       <Col lg={12}>
//         <div className="newsletter-bx wow slideInUp">
//           <Row>
//             <Col lg={12} md={6} xl={5}>
//               <h3>"Imagine, Connect, Discover" - John Nganga<br></br></h3>
//             </Col>
//           </Row>
//         </div>
//       </Col>
//   )
// }



//     'Connect, Imagine, Discover is the workflow to solve an algorithm - John Nganga'
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const quotes = [
    'The best error message is the one that never shows up. - Thomas Fuchs',
    'Confusion is part of programming. ― Felienne Hermans',
    'There is always one more bug to fix.  – Ellen Ullman',
    'Bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin',
    'Connect, Imagine, Discover is the workflow to solve an algorithm - John Nganga',
    'Programming is learned by writing programs. ― Brian Kernighan'
  ];
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 style={{ whiteSpace: 'nowrap', overflow: 'nowrap', textOverflow: 'ellipsis' }}>
              "{randomQuote}"
            </h3>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
