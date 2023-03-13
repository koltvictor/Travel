import React from 'react'
import styled from 'styled-components';

export default function Contact() {
  return (
    <ContactWrapper>
        <div className="row">
        <div className="column">
            <div className="column1">Email<br/>kolt@koltdesigns.com</div>
        </div>
        <div className="column">
            <div className="column2">Phone<br/>917.285.3000</div>
        </div>
        <div className="column">
            <div className="column3">Address<br/>New York City, NY</div> 
        </div>
        </div>
    </ContactWrapper>
  )
}


const ContactWrapper = styled.div`
    display: flex;
    background-color: #f1f1f1;
    padding: 10rem 5rem 0rem 5rem;
`