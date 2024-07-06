import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ImageFooter() {
    const styles = {
        main: {
        backgroundColor: "#3bad49",
        padding: "30px",
        }
      }
  return (
    <div style={styles.main}>
      <Container>
      <Card>
        <Card.Body>
        </Card.Body>
        <Card.Img variant="bottom" src="https://247foods.ng/public/uploads/1595090176-w-1170-h-150-AAA.jpg" />
      </Card>
      </Container>
      
    </div>
  );
}

export default ImageFooter;