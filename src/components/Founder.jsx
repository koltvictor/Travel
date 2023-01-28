import React from 'react'
import { FounderInfo } from '../data/FounderInfo'

export default function Founder() {
    const toBio = () => {
        window.location.href = '/bio'
    }
  return (
    <div>
        {FounderInfo.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.name} onClick={toBio} />
                </div>
            )
        })}
    </div>
  )
}
