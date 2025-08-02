import { useState } from 'react'
import Home from './pages/Home.jsx'
import {Routes, Route } from "react-router-dom";
import Templates from './pages/Templates.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Footer from './components/HomePage/Footer.jsx';

function App() {

  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Templates' element={<Templates />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
