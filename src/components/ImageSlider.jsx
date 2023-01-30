import React, { useState } from 'react'
import { SliderData } from '../data/SliderData'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide= () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <section className="slider">
        <VscArrowLeft className="left-arrow" onClick={prevSlide} />
        <VscArrowRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index} >
                    {index === current && (<img src={slide.image} alt={slide.info} className="sliderImage" />)}
                </div>
            )})}
    </section>
  )
}
