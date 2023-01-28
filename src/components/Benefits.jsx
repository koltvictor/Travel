import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Benefits() {
  return (
    <div>
        <Container className="internalComponentsWrapper">
            <div className="row">
                <div className="column d-flex">
                <Container className="columnA d-flex align-items-center justify-content-center">
                    <h4>BENEFITS OF WORKING WITH TAILORED TRAVEL</h4>
                    <p className="componentText">Every client is a VIP, and every trip is meant to be remarkable. No matter where in the world you travel, you will be received as an honored guest and provided access to exclusive privileges, complimentary benefits, cutting-edge technology, and unmatched service.</p>
                </Container>
                </div>
                <div className="column">
                <Container className="columnB d-flex align-items-sm-center justify-content-center">
                            <img src="https://i.imgur.com/uAlJ8I6.png" alt="Koh Mun Nork, Thailand" className="itineraryImage" />
                    </Container>
                </div>
            </div>

        </Container>
    </div>
  )
}