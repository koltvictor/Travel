import React from 'react'
import Nav from "react-bootstrap/Nav";

export default function Navigation() {

  return (
    <div>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/travel">custom itinerary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/gallery">gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">about</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact">
            contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
