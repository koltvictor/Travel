import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export default function Itinerary() {
    const goToTravel = () => {
        window.location.href = '/travel';
    }

  return (

    <ItineraryWrapper>
        <div className="row">
            <div className="column">
                <div className="columnA">
                    <img src="https://i.imgur.com/ZSL5YTz.png" alt="Pang Oung, Thailand" className="itineraryImage" />
                </div>
            </div>
            <div className="column">
                <div className="columnB"><br/><br/><br/><br/>
                    <h4>CUSTOM ITINERARIES</h4>
                    <p>If you seek unique travel experiences that capture the essence of a destination, immersing you in the culture and connecting you with local customs and traditions, our itineraries will excite and inspire you. Our goal is to ensure travelers have meaningful and captivating experiences that are as unique as you are.</p>
                    <Button onClick={goToTravel}>Create Your Personalised Itinerary</Button>
                </div>
            </div>
        </div>
    </ItineraryWrapper>
  )
}

const ItineraryWrapper = styled.div`
    padding: 10rem 5rem 0rem 5rem;
`
