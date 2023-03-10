import React from 'react'

export default function Logo() {
    const goHome = () => {
        window.location.href = '/'
    }
  return (
    <div>
        <img src="https://i.imgur.com/u4PJ6v3.png" alt="logo" className="logo" onClick={goHome} />
    </div>
  )
}
