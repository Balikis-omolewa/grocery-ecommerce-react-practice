import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';

  function TopNav({ styles }) {
    const { general, button, dropdown, link } = styles;

    return (
      <>
          <Nav className="justify-content-center" activeKey="/home" style={general}>
              <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" style={button}>
                      Select a Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={dropdown}>
                      <Dropdown.Item href="#/action-1">Supermart</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">General Food Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Organic / Season Food Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Meat / Frozen Food Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-5">Your Local Food Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-6">Fruits & Vegetables Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-7">Soup / Spices Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-8">Baby / Infant Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-9">Gift Pack / Bundle Store</Dropdown.Item>
                      <Dropdown.Item href="#/action-10">Organic / Season Food Store</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                  <Nav.Link href="/home" style={link}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-1" style={link}>Best Sale</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2" style={link}>Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2" style={link}>Promotions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2" style={link}>Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2" style={link}>About Us</Nav.Link>
              </Nav.Item>
              <Dropdown style={button}>
                      Contact Us
              </Dropdown>
          </Nav>
      </>
  );
}
export default TopNav;