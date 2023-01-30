import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Elevated() {
  return (
    <Container className="internalComponentsWrapper">
        <div className="row">
        <div className="column d-flex align-items-center justify-content-center col-md-6">

                <img src="https://i.imgur.com/yANhDR8.png" alt="Italy" className="itineraryImage"/>

        </div>
        <div className="column d-flex align-items-center justify-content-center col-md-6">

                <h4>ELEVATED EXPERIENCES</h4>
                <p className="componentText">Your preferences and interests are unique, and we believe you deserve to work with a travel company that can guide you through designing and executing extraordinary experiences. When you partner with BTA, you will work directly with our team of expert Virtuoso travel advisors to create fully customized itineraries based on your interests and budget.</p>

        </div>
        </div>
    </Container>
  )
}