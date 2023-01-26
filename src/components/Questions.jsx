import React, { useState } from "react";
import DatePicker from "react-date-picker";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CardWithFeedback() {
    const [ value, onChange ] = useState(new Date());
    const [ value2, onChange2 ] = useState(new Date())

  return (
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
                  Just a few questions to get us pointed in the right direction
                </p>
              </div>

              <hr />

              <form className="px-4" action="">
              <p className="text-center">
                  <strong>When would you like to depart?</strong>
                </p>
                <DatePicker onChange={onChange} value={value} />
                <br/><br/>
                <p className="text-center">
                  <strong>When would you like to return?</strong>
                </p>
                <DatePicker onChange={onChange2} value={value2} />
                <br/><br/>
                <p className="text-center">
                  <strong>What would you like to do on your trip?</strong>
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
                            <MDBCheckbox
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Site Seeing"
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
                  <strong>Additional Information you'd like to add?</strong>
                </p>
                <MDBTextArea
                    className="form-control mb-4"
                    rows="3"
                    placeholder="Type your message here..."
                />
              </form>
            </MDBCardBody>
            <MDBCardFooter>
              <div className="text-end">
                <MDBBtn>Submit</MDBBtn>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}