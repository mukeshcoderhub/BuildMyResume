import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    field: '',
    about: '',
    education: '',
    skills: '',
    experience: '',
    themeColor: '#000000', // default to black
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    for (let key in formData) {
      if (!formData[key].trim()) {
        toast.warn(`⚠️ Please fill in the ${key} field`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await axios.post('https://buildmyresume-1.onrender.com/generate-pdf', formData);
      toast.success('✅ Resume PDF sent to your email!');
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to generate or send PDF');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl font-sans">
      <h2 className="text-2xl font-bold text-center text-[#ec5952] mb-6">
        Generate Resume PDF
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Full Name', name: 'name' },
          { label: 'Phone Number', name: 'phone' },
          { label: 'Email Address', name: 'email' },
          { label: 'Address', name: 'address' },
          { label: 'Job Title / Field', name: 'field' },
          { label: 'About You', name: 'about' },
          { label: 'Education Info', name: 'education' },
          { label: 'Skills (comma-separated)', name: 'skills' },
          { label: 'Experience (comma-separated)', name: 'experience' },
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="font-semibold mb-1 text-gray-700">{field.label}</label>
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              rows={field.name === 'about' ? 4 : 2}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ec5952]"
            />
          </div>
        ))}

        {/* 🎨 Color Picker */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-gray-700">
            Theme Color (for resume styling)
          </label>
          <input
            type="color"
            name="themeColor"
            value={formData.themeColor}
            onChange={handleChange}
            className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
          />
          <p className="text-sm text-gray-500 mt-1">Default is black. Choose a color to style your resume.</p>
        </div>

        {/* 🚀 Submit Button */}
        <button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded font-semibold text-white transition duration-300 ${
            isLoading
              ? 'bg-[#d44d44] cursor-not-allowed opacity-80'
              : 'bg-[#ec5952] hover:bg-[#d44d44] cursor-pointer'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loader border-white border-t-transparent"></span>
              Sending...
            </>
          ) : (
            'Generate PDF'
          )}
        </button>
      </form>

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default ResumeForm;
