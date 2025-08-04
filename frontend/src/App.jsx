import { useState } from 'react'
import Home from './pages/Home.jsx'
import {Routes, Route } from "react-router-dom";
import PageNotFound from './pages/PageNotFound.jsx';
import ResumeForm from './pages/ResumeForm.jsx';

function App() {

  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ResumeForm' element={<ResumeForm />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
