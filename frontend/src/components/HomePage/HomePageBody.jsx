import React from 'react'
import Body1 from './Body1.jsx'
import Body2 from './Body2.jsx'
import Body3 from './Body3.jsx'
import Footer from './Footer.jsx'

const HomePageBody = () => {
  return (
      <div className='w-full min-h-screen'>
      <Body1 />
      <Body3/>
      <Body2 />
      <Footer />
    </div>
  )
}

export default HomePageBody