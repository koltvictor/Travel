import React from 'react'
import { Examples } from '../data/Examples'
import Container from 'react-bootstrap/Container'

export default function ExamplePDFs() {
  return (
    <div>
        {Examples.map((example) => {
            return (
                <Container className="internalComponentsWrapper">
                    <div key={example.id} className="row">
                        <div className="column d-flex align-items-center justify-content-center col-md-6">
                            <a href={`/${example.id}`}>
                                <img src={example.imageLink} alt={example.location} className="pdfImg" />
                             </a>
                        </div>
                        <div className="column d-flex align-items-center justify-content-center col-md-6">
                            <h4>{example.location}</h4>
                            {/* <h4>{example.season}</h4> */}
                        </div>
                            <div className="column d-flex align-items-center justify-content-center col-md-6">
                            <p className="componentText">{example.description}</p>
                        </div>
                    </div>
                </Container>
            )
        })}
    </div>
  )
}