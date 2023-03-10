import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Benefits() {
  return (
    <div>

        <Container className="internalComponentsWrapper">
              <div className="row">
                  
                  <div className="column d-flex align-items-center justify-content-center col-md-6">
                      <h4>UNIQUELY TAILORED CUSTOM ITINERARIES</h4>
                      <p className="componentText">Every client is a VIP, and every trip is meant to be remarkable. No matter where in the world you travel, you will be received as an honored guest and provided access to exclusive privileges, complimentary benefits, cutting-edge technology, and unmatched service.</p>
                  </div>
                  <div className="column d-flex align-items-center justify-content-center col-md-6">
                  <img src="https://i.imgur.com/uAlJ8I6.png" alt="Pang Oung, Thailand" className="itineraryImage" />
                  </div>
              </div>
          </Container>
    </div>
  )
}