import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <AboutWrapper>
        <h4>WHERE WILL YOUR JOURNEY TAKE YOU?</h4><br/>
        <p className="centeredText">Are you a discerning traveler seeking to explore and discover the world’s most incredible destinations? Do you dream of adventure on the African plains or a life-changing expedition through the Arctic? Perhaps you are in a stage of your life where you seek peace, tranquility, and a relaxing escape to your private island where azure waters meet pristine white sand beaches. Boutique Travel Advisors is a luxury travel agency based out of Scottsdale, Arizona specializes in designing once-in-a-lifetime experiences for individuals, families, and teams.

        Stop settling for plain uninspired vacations. Instead, discover how bespoke travel experiences explicitly crafted for YOU will transform your travels. Let our luxury Virtuoso travel agency show you the way.
        </p>     
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
    padding: 2rem 20rem 2rem 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
`
