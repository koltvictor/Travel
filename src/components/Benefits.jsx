import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export default function Benefits() {
  return (
    <div>
    <BenefitsWrapper>
        <div className="alignRight">
            <img src="https://i.imgur.com/uAlJ8I6.png" alt="Koh Mun Nork, Thailand" className="benefitsImage" />
        </div>
        <TextWrapper>
        <h4>BENEFITS OF WORKING WITH TAILORED TRAVEL</h4>
        <p>Every client is a VIP, and every trip is meant to be remarkable. No matter where in the world you travel, you will be received as an honored guest and provided access to exclusive privileges, complimentary benefits, cutting-edge technology, and unmatched service.</p>
        <Button>Check out more</Button>
        </TextWrapper>
    </BenefitsWrapper>
    <BenefitsWrapper>
        <div>
            <img src="https://i.imgur.com/yANhDR8.png" alt="Italy" className="benefitsImage"/>
        </div>
        <TextWrapper>
        <h4>ELEVATED EXPERIENCES</h4>
        <p>
Your preferences and interests are unique, and we believe you deserve to work with a travel company that can guide you through designing and executing extraordinary experiences. When you partner with BTA, you will work directly with our team of expert Virtuoso travel advisors to create fully customized itineraries based on your interests and budget.</p>
<Button>More Information</Button>
        </TextWrapper>
    </BenefitsWrapper>
    </div>
  )
}

const BenefitsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10rem 5rem 0rem 5rem;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`