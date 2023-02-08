import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import DatePicker from "react-date-picker";
import {
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
// import CountrySelect from "./CountrySelect";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

export default function Questions() {
    const [ value, onChange ] = useState(new Date());
    const [ value2, onChange2 ] = useState(new Date())
    // const [inputValue, setInputValue] = React.useState('');
    const form = useRef()
    let navigate = useNavigate();

    const sendEmail = (e) => {
      console.log(e.target)
        e.preventDefault();

        emailjs.sendForm(
            'service_3gqx6iw', 
            'template_u54d3xr', 
            e.target, 
            'user_Jhf473QBsymPnicTrMVk1')
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
        navigate("/confirmation")
    }

  return (

    <FormWrapper ref={form} onSubmit={sendEmail}>
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                <p>
                  <strong>Itinerary Generator</strong>
                </p>
                <p>
                  Just a few questions to get us moving in the right direction
                </p>
              </div>
              <hr />
              <form className="px-4" onSubmit={sendEmail}>
                <p className="text-center">
                    <strong>Your name:</strong>
                </p>
                <MDBInput className="mb-4" rows={1} required type="text" name="from_name" />
                <p className="text-center">
                    <strong>Your email address:</strong>
                </p>
                <MDBInput className="mb-4" rows={1} required type="email" name="email_address" />
                <p className="text-center">
                    <strong>Number in your party:</strong> <br/>(please designate number of adults and number of children)
                </p>
                <MDBInput className="mb-4" rows={1} name="number_party" />
                <p className="text-center"><strong>Where would you like to go?</strong></p>
                {/* <CountrySelect inputValue={inputValue} setInputValue={setInputValue} name="location" /> */}
                <MDBInput className="mb-4" rows={1} required type="text" name="location" />
                <br/>
                <p className="text-center">
                  <strong>When would you like to depart?</strong>
                </p>
                <div className="centeredInfo">
                <DatePicker onChange={onChange} value={value} format="dd/MM/y" name="out_date" />
                </div>
                <br/>
                <p className="text-center">
                  <strong>When would you like to return?</strong>
                </p>
                <div className="centeredInfo">
                <DatePicker onChange={onChange2} value={value2} format="dd/MM/y" name="return_date" />
                </div>
                <br/>
                <p className="text-center">
                  <strong>Choose some items that describe your trip</strong>
                </p>
                <Container>
                    <Row>
                        <Col>
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Helicopters"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Surfing"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Snorkeling"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Relaxing"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Hiking"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Fishing"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Camping"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Ultra Luxury"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Museums"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Art"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Private Plane"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Skiing"
                            className="mb-2"
                            />                
                        </Col>
                        <Col>
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Bicycling"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Para Sailing"
                            className="mb-2"
                            />

                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Para Gliding"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Hot Air Ballooning"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Yachting/Sailing"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Ziplining"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Food/Foodie"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Trains"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Historic Sites"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="City Sights"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Shopping"
                            className="mb-2"
                            />
                        </Col>
                        <Col>
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Site Seeing"
                            className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Mountains"
                                className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Oceans"
                                className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Beaches"
                                className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Forest"
                                className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Desert"
                                className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Snow & Ice"
                                className="mb-2"
                            />
                            <MDBCheckbox
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                                label="Safari"
                                className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Staff"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Star gazing"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Wine tasting"
                            className="mb-2"
                            />
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Private Tours"
                            className="mb-2"
                            />
                        </Col>
                    </Row>
                </Container>
                <br/>
                <p className="text-center">
                  <strong>Occasion?</strong>
                </p>
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Anniversary"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Bachelor/ette Party"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Birthday"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Business Trip"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Family Vacation"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Just Because"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Relaxing Getaway"
                    className="mb-2"
                />
                <MDBCheckbox
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="Romantic Getaway"
                    className="mb-2"
                /><br/>
                <p className="text-center">
                  <strong>Any additional information you'd like to add:</strong><br/>(i.e. budget, special requests, etc.)
                </p>
                <MDBTextArea
                    className="form-control mb-4"
                    rows="3"
                    placeholder="Type your message here..."
                    type="text"
                    name="message"
                />
                <input type="submit" value="send" />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </FormWrapper>
  );
}


const FormWrapper = styled.div `
    padding-top: 5vh;
`