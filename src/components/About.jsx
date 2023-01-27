import React from 'react'
import styled from 'styled-components'


export default function About() {
  return (
    <AboutWrapper>
        <h4>WHERE WILL YOUR JOURNEY TAKE YOU?</h4><br/>
        <p className="centeredText">Are you a discerning traveler seeking to explore and discover the world’s most incredible destinations? <br/>Do you dream of adventure on the African plains or a life-changing expedition through the Arctic? Perhaps you are in a stage of your life where you seek peace,<br/> tranquility, and a relaxing escape to your private island where azure waters meet pristine white sand beaches.<br/> Tailored Travel is a luxury travel agency based out of New York City and specializes in designing <br/>once-in-a-lifetime experiences for individuals, families, teams, and groups.
<br/><br/>
        Stop settling for plain uninspired vacations. Instead, discover how bespoke travel experiences explicitly crafted for your desires will transform your travels.        </p>     
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
    padding: 2rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
`

