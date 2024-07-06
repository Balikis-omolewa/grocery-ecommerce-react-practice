import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function TwoCardComponent() {
  const cardInfo = [
    {
      imgSrc: 'https://247foods.ng/public/uploads/1595090067-w-1170-h-150-A.jpg',
    },
    {
      imgSrc: 'https://247foods.ng/public/uploads/1595090110-w-1170-h-150-AA.jpg',
    }
  ];

  return (
    <Container>
    <Row>
      {cardInfo.map(({ imgSrc }, index) => (
        <Col key={index} md={6}>
          <Card style={{ margin: '20px' }}>
            <Card.Img variant="top" src={imgSrc} />
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  
  );
}

export default TwoCardComponent;
