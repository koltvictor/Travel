import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Elevated() {
  return (
    <Container className="internalComponentsWrapper">
        <div className="row">
        <div className="column">
            <Container className="columnA d-flex align-items-sm-center justify-content-center">
                <img src="https://i.imgur.com/yANhDR8.png" alt="Italy" className="itineraryImage"/>
            </Container>
        </div>
        <div className="column">
            <Container className="columnB d-flex align-items-center justify-content-center">
                <h4>ELEVATED EXPERIENCES</h4>
                <p className="componentText">Your preferences and interests are unique, and we believe you deserve to work with a travel company that can guide you through designing and executing extraordinary experiences. When you partner with BTA, you will work directly with our team of expert Virtuoso travel advisors to create fully customized itineraries based on your interests and budget.</p>
            </Container>
        </div>
        </div>
    </Container>
  )
}