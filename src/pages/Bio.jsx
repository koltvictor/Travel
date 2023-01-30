import React from 'react'
import { FounderInfo } from '../data/FounderInfo.jsx'

export default function Bio() {
  return (
    <div>
        {FounderInfo.map((founder, index) => {
            return (
                <div key={index}>
                    <h1>{founder.name}</h1>
                    <h3>{founder.title}</h3>
                    <img src={founder.image} alt={founder.name} />
                    <p>{founder.bio}</p>
                </div>
            )
        })}
    </div>
  )
}
