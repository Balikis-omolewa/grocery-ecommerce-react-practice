import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    const styles = {
        main: {
      backgroundColor: "#0b0b0b",
      padding: "20px",
      color: "white",
      fontSize: "15px",
        },
        footerHeading: {
           textDecoration: "none",
           fontSize: "18px",
        },
        footerA: {
            textDecoration: "none",
            fontSize: "18px",
         },
      }
  return (
    <div style={styles.main}>
    <Container>
      <Row >
       
       <Col sm={4}>
        <h2>Grocery Store</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  nulla? Natus, saepe sequi.</p>
        </Col>
        <Col sm={2}>
        <h6 style={styles.footerHeading}>Delivery</h6><br/>
        <div>
            <p href="#">List Item</p>
            <p href="#">List Item</p>
            <p href="#">List Item</p>
        </div>
        </Col>
        <Col sm={2}>
        <h6>Quick Links</h6><br/>
       <div>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        </div>
        </Col>
        <Col sm={2}>
        <h6>Discovery</h6><br/>
       <div>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        </div>
        </Col>
        <Col sm={2}>
        <h6>Contact</h6><br/>
       <div>
        <p href="#">List Item</p>
        <p href="#">List Item</p>
        </div>
        </Col>
      
      
      </Row> </Container>
      </div>
  );
}

export default Footer;