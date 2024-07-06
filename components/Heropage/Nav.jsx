import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';

function HeaderNavbar() {
    const styles = {
        search: {
            position: "relative",
            backgroundColor: "#fff",
            border: "2px solid #d1ffbd",
            outline: "none",
            padding: "8px 150px",
            alignItems: "center",
            borderRadius: "15px",
            fontSize: "15px",
            margin: "10px",
            
          },
          button: {
            position: "absolute",
            top: "20%",
            left: "87%",
            backgroundColor: "#d1ffbd",
            border: "none",
            outline: "none",
            padding: "10px 20px",
            alignItems: "center",
            borderRadius: "15px",
            fontSize: "15px",
          },
          dropdown: {
            width: "200px",
            border: "none",
            fontSize: "12px",
            margin: "10px",
          },
          features: {
            backgroundColor: "#fff",
            color: "#ff772e",
            border: "none",
            padding: "10px 20px",
            alignItems: "center",
            borderRadius: "25px",
            fontSize: "15px",
            fontWeight: "500"
          },
    }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Grocery Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <Nav.Link href="#features" style={styles.features}>Festival Flash Sale</Nav.Link>
          </Nav>
         
          <Nav>
          <input type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" style={styles.search}/>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#features">Cart <Badge bg="warning">0</Badge></Nav.Link>
           
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saved Items</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="Help" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Help Center</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Payment Issue </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;