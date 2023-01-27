import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Elevated() {
  return (
    <Container className="homeComponentsWrapper">
        <div className="row">
        <div className="column">
            <div className="columnA">
                <img src="https://i.imgur.com/yANhDR8.png" alt="Italy" className="itineraryImage"/>
            </div>
        </div>
        <div className="column">
            <div className="columnA"><br/><br/><br/><br/>
                <h4>ELEVATED EXPERIENCES</h4>
                <p>Your preferences and interests are unique, and we believe you deserve to work with a travel company that can guide you through designing and executing extraordinary experiences. When you partner with BTA, you will work directly with our team of expert Virtuoso travel advisors to create fully customized itineraries based on your interests and budget.</p>
                <Button>More Information</Button>
            </div>
        </div>
        </div>
    </Container>
  )
}