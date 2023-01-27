import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation({logo}) {

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
        <Navbar.Brand href="/">{logo}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="/travel">custom itinerary</Nav.Link>
              <Nav.Link href="/gallery">gallery</Nav.Link>
              <NavDropdown title="about" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/about">Our Story</NavDropdown.Item>
                <NavDropdown.Item href="/partners">
                  Partners
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                FAQ's
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar 
        bg="white" 
        variant="light" 
        fixed="top"
        className="justify-content-end"
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">🏠</Nav.Link>
            <Nav.Link href="#/travel">custom itinerary</Nav.Link>
            <Nav.Link href="/gallery">gallery</Nav.Link>
            <Nav.Link href="/about">about us</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}


      {/* <MDBContainer breakpoint="sm">
      <Nav className="navBar">
      <Nav.Item>
          <Nav.Link href="/" className="linkText">🏠</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/travel" className="linkText">custom itinerary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/gallery" className="linkText">gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" className="linkText">about</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" className="linkText">
            contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </MDBContainer> */}

    </div>
  )
}
