import React from 'react'
import Navbar from '../components/HomePage/Navbar.jsx'
import HomePageBody from '../components/HomePage/HomePageBody.jsx'
const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <HomePageBody />
    </div>
  )
}

export default Home