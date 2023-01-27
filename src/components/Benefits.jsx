import React from 'react'
// import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Benefits() {
  return (
    <div>
        <Container className="homeComponentsWrapper">
            <div className="row">
                <div className="column">
                <div className="columnA"><br/><br/><br/><br/>
                    <h4>BENEFITS OF WORKING WITH TAILORED TRAVEL</h4>
                    <p>Every client is a VIP, and every trip is meant to be remarkable. No matter where in the world you travel, you will be received as an honored guest and provided access to exclusive privileges, complimentary benefits, cutting-edge technology, and unmatched service.</p>
                    <Button>Check out more</Button>
                </div>      
                </div>
                <div className="column">
                <div className="columnB">
                            <img src="https://i.imgur.com/uAlJ8I6.png" alt="Koh Mun Nork, Thailand" className="itineraryImage" />
                    </div>
                </div>
            </div>

        </Container>
    </div>
  )
}

// const BenefitsWrapper = styled.div`
//     padding: 10rem 5rem 0rem 5rem;
// `