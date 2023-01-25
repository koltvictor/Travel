import React from 'react'

export default function Logo() {
    const goHome = () => {
        window.location.href = '/'
    }
  return (
    <div>
        <img src="https://i.imgur.com/rFwIeqw.png" alt="logo" className="logo" onClick={goHome} />
    </div>
  )
}
