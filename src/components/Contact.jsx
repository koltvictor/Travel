import React from 'react'
import styled from 'styled-components';

export default function Contact() {
  return (
    <ContactWrapper>
        <div className="row">
        <div className="column">
            <div className="column1">Email</div>
        </div>
        <div className="column">
            <div className="column2">Phone</div>
        </div>
        <div className="column">
            <div className="column3">Address</div> 
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