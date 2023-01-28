import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Itinerary() {
    const goToTravel = () => {
        window.location.href = '/travel';
    }
  return (
    <Container className="internalComponentsWrapper d-flex align-items-sm-center justify-content-center">
        <div className="row">
            <div className="column d-flex align-items-sm-center justify-content-center">
                <Container className="columnA d-flex align-items-sm-center justify-content-center">
                    <img src="https://i.imgur.com/ZSL5YTz.png" alt="Pang Oung, Thailand" className="itineraryImage" />
                </Container>
            </div>
            <div className="column d-flex align-items-sm-center justify-content-center">
                <Container className="columnB align-items-center">
                    <h4>CUSTOM ITINERARIES</h4>
                    <p>If you seek unique travel experiences that capture the essence of a destination, immersing you in the culture and connecting you with local customs and traditions, our itineraries will excite and inspire you. Our goal is to ensure travelers have meaningful and captivating experiences that are as unique as you are.</p>
                    <Button onClick={goToTravel}>Create Your Personalised Itinerary</Button>
                </Container>
            </div>
        </div>
    </Container>
  )
};