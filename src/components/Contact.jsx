import React from 'react'
import styled from 'styled-components';

export default function Contact() {
  return (
    <ContactWrapper>
        <div className="row">
        <div class="column">
            <div class="column1">Email</div>
        </div>
        <div className="column">
            <div class="column2">Phone</div>
        </div>
        <div className="column">
            <div class="column3">Address</div> 
        </div>
        </div>
    </ContactWrapper>
  )
}


const ContactWrapper = styled.div`
    display: flex;

    padding: 10rem 5rem 0rem 5rem;
`