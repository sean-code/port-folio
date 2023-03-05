import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './education.css';

function Education() {
return (
    <CardGroup>
        <Card className='education-card'>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/891698738/photo/mortar-and-degree.jpg?s=612x612&w=0&k=20&c=OBPBQicp4iU7HmCRBEr8SVcAB3iRF79xF0dh5y3L4DY=" />
            <Card.Body>
            <Card.Title>Bachelor of Technology</Card.Title>
            </Card.Body>
            <Card.Text>
                2022
            </Card.Text>
        </Card>
        <Card className='education-card'>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1399470424/vector/luxury-certificate-of-appreciation-template-with-red-and-gold-color-multipurpose-certificate.jpg?s=612x612&w=0&k=20&c=dGHpqfFSiyQr1N0RTmf0gOL9Nn0tld-w4YqjnACuBgw=" />
            <Card.Body>
            <Card.Title>Diploma in Computer Science</Card.Title>
            </Card.Body>
            <Card.Text>
                2021
            </Card.Text>
        </Card>
        <Card  className='education-card'>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/891698738/photo/mortar-and-degree.jpg?s=612x612&w=0&k=20&c=OBPBQicp4iU7HmCRBEr8SVcAB3iRF79xF0dh5y3L4DY=" />
            <Card.Body>
            <Card.Title>Certificate in Software Engineering</Card.Title>
            </Card.Body>
            <Card.Text>
                2023
            </Card.Text>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1399470424/vector/luxury-certificate-of-appreciation-template-with-red-and-gold-color-multipurpose-certificate.jpg?s=612x612&w=0&k=20&c=dGHpqfFSiyQr1N0RTmf0gOL9Nn0tld-w4YqjnACuBgw=" />
            <Card.Body>
            <Card.Title>Certificate in Network Fundamentals</Card.Title>
            </Card.Body>
            <Card.Text>
                2021
            </Card.Text>
        </Card>
    </CardGroup>
    );
}

export default Education;