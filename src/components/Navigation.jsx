import React from 'react'
import Nav from "react-bootstrap/Nav";

export default function Navigation() {

  return (
    <div>
      <Nav className="justify-content-end">
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
    </div>
  )
}
