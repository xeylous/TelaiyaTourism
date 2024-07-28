import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import backgroundImage from '../../Images/ContactUs_bg.jpg'; // Import the background image

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to handle the form submission, such as sending the data to a backend server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="border border-gray-300 rounded-lg p-2 w-full" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="border border-gray-300 rounded-lg p-2 w-full" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="border border-gray-300 rounded-lg p-2 w-full resize-none" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Arial', sans-serif;
          }
        `}
      </style>
    </div>
  );
}

export default ContactUs;
