import React from 'react'
import ImageSlider from '../components/ImageSlider'
import About from '../components/About'
import Itinerary from '../components/Itinerary'
import { SliderData } from '../components/SliderData'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
        <ImageSlider slides={SliderData} />
        <About />
        <Itinerary />
        <Benefits />
        <Contact />
    </div>
  )
}
