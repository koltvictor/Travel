import React from 'react'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Itinerary() {
    // const goToTravel = () => {
    //     window.location.href = '/travel';
    // }
  return (
    <Container className="internalComponentsWrapper">
        <div className="row">
            <div className="column d-flex align-items-center justify-content-center col-md-6">

                    <img src="https://i.imgur.com/ZSL5YTz.png" alt="Pang Oung, Thailand" className="itineraryImage" />

            </div> 
            <div className="column d-flex align-items-center justify-content-center col-md-6">

                    <h4>CUSTOM ITINERARIES</h4>
                    <p className="componentText">If you seek unique travel experiences that capture the essence of a destination, immersing you in the culture and connecting you with local customs and traditions, our itineraries will excite and inspire you. Our goal is to ensure travelers have meaningful and captivating experiences that are as unique as you are.</p>

            </div>
        </div>
    </Container>
  )
};