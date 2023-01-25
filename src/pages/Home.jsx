import React from 'react'
import ImageSlider from '../components/ImageSlider'
import About from '../components/About'
import Itinerary from '../components/Itinerary'
import { SliderData } from '../components/SliderData'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import Elevated from '../components/Elevated'

export default function Home() {
  return (
    <div>
        <ImageSlider slides={SliderData} />
        <About />
        <Itinerary />
        <Benefits />
        <Elevated />
        <Contact />
    </div>
  )
}
