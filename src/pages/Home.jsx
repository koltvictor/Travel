import React from 'react'
import ImageSlider from '../components/ImageSlider'
import About from '../components/About'
import Itinerary from '../components/Itinerary'
import { SliderData } from '../data/SliderData'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import Elevated from '../components/Elevated'
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
    <div>
        <Container fluid className="homeComponentsWrapper">
          <ImageSlider slides={SliderData} />
          <About />
          <Itinerary />
          <Benefits />
          <Elevated />
        </Container>
        <Contact />
    </div>
  )
}
