import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-[#282828] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-2">© {new Date().getFullYear()} BuildMyResume</h2>
        <p className="text-sm text-gray-400">Crafted with ❤️ by Mukesh Kumar</p>
      </div>
    </footer>
  )
}

export default Footer