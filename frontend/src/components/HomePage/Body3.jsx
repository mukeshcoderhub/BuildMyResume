import React from 'react'
import bgImg from '../../assets/MacBook Pro 14_ - 1.png'

const Body3 = () => {
  return (
    <div
      className="h-[40vh] sm:h-screen bg-contain bg-no-repeat bg-[#282828] bg-bottom"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <p className="text-white text-3xl sm:text-5xl font-bold text-center z-50 m-auto py-16">
        Modern Templates
      </p>
    </div>
  )
}

export default Body3
