import React from 'react'
import { Examples } from '../data/Examples'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

export default function ExamplePDFs() {
  return (
    <div>
        {Examples.map((example) => {
            return (
                <Container className="internalComponentsWrapper">
                    <div key={example.id} className="row">
                        <div className="column d-flex align-items-center justify-content-center col-md-6">
                            <Link to={example.id}>
                                <img src={example.imageLink} alt={example.location} className="pdfImg" />
                             </Link>
                        </div>
                        <div className="column d-flex align-items-center justify-content-center col-md-6">
                            <h4>{example.location}</h4>
                            {/* <h4>{example.season}</h4> */}
                        </div>
                            <div className="column d-flex align-items-center justify-content-center col-md-6">
                            <h5>{example.description}</h5>
                        </div>
                    </div>
                </Container>
            )
        })}
    </div>
  )
}