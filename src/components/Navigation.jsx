import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation({logo}) {

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="navBar">
        <Container>
        <Navbar.Brand href="/">{logo}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/travel">custom itinerary</Nav.Link>
              <Nav.Link href="/gallery">gallery</Nav.Link>
              <NavDropdown title="about" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/about">Our Story</NavDropdown.Item>
                <NavDropdown.Item href="/partners">
                  Partners
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faqs">
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
    </div>
  )
}
