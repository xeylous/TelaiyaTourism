import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import backgroundImage from '../../Images/Home_img.jpg'; // Import the background image
import Footer from '../Footer/Footer';


const Bookatrip = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('Telaiya');
  const [places, setPlaces] = useState({
    telaiyaDam: false,
    vrindahaWaterfall: false,
    radhaKrishnaMandir: false,
    kodermaWildlifeSanctuary: false,
    PetroWaterfall: false,
    PanchKheroDam: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    address: '',
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedPlaces = Object.keys(places).filter(place => places[place]);
    console.log(`Name: ${name}, Contact Number: ${contactNumber}, Source: ${source}, Destination: ${destination}, Places: ${selectedPlaces}`);
    // Reset form fields after submission
    let formData = {
    'name' : name,
    'contactNumber' : contactNumber,
    'source' : source,
    'destination' : destination,
    'places' : selectedPlaces
  }
  console.log(formData);
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
    setName('');
    setContactNumber('');
    setSource('');
    setPlaces({
      telaiyaDam: false,
      vrindahaWaterfall: false,
      radhaKrishnaMandir: false,
      kodermaWildlifeSanctuary: false,
      PetroWaterfall: false,
      PanchKheroDam: false,
    });
  };

  const handlePlaceChange = (e) => {
    const { name, checked } = e.target;
    setPlaces(prevPlaces => ({
      ...prevPlaces,
      [name]: checked,
    }));
  };

  return (
    <>
    <div className="container mx-auto p-8" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Book a Trip</h2>
        <div className="mb-4">
          <label htmlFor="name" name="name" className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" id="name" className="border border-gray-300 rounded-lg p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-semibold mb-2">Contact Number</label>
          <input type="text" id="contactNumber" className="border border-gray-300 rounded-lg p-2 w-full" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="source"  className="block text-sm font-semibold mb-2">Source</label>
          <input type="text" id="source" className="border border-gray-300 rounded-lg p-2 w-full" value={source} onChange={(e) => setSource(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="destination"  className="block text-sm font-semibold mb-2">Destination</label>
          <input type="text" id="destination" className="border border-gray-300 rounded-lg p-2 w-full" value={destination} readOnly />
        </div>
        <div className="mb-4">
          <label name="places" className="block text-sm font-semibold mb-2">Places to Visit</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input type="checkbox" id="telaiyaDam" name="telaiyaDam" checked={places.telaiyaDam} onChange={handlePlaceChange} />
              <label htmlFor="telaiyaDam" className="ml-2">Telaiya Dam</label>
            </div>
            <div>
              <input type="checkbox" id="vrindahaWaterfall" name="vrindahaWaterfall" checked={places.vrindahaWaterfall} onChange={handlePlaceChange} />
              <label htmlFor="vrindahaWaterfall" className="ml-2">Vrindaha Waterfall</label>
            </div>
            <div>
              <input type="checkbox" id="radhaKrishnaMandir" name="radhaKrishnaMandir" checked={places.radhaKrishnaMandir} onChange={handlePlaceChange} />
              <label htmlFor="radhaKrishnaMandir" className="ml-2">Radha Krishna Mandir</label>
            </div>
            <div>
              <input type="checkbox" id="kodermaWildlifeSanctuary" name="kodermaWildlifeSanctuary" checked={places.kodermaWildlifeSanctuary} onChange={handlePlaceChange} />
              <label htmlFor="kodermaWildlifeSanctuary" className="ml-2">Koderma Wildlife Sanctuary</label>
            </div>
            <div>
              <input type="checkbox" id="PetroWaterfall" name="PetroWaterfall" checked={places.PetroWaterfall} onChange={handlePlaceChange} />
              <label htmlFor="PetroWaterfall" className="ml-2">Petro Waterfall</label>
            </div>
            <div>
              <input type="checkbox" id="PanchKheroDam" name="PanchKheroDam" checked={places.PanchKheroDam} onChange={handlePlaceChange} />
              <label htmlFor="PanchKheroDam" className="ml-2">PanchKhero Dam</label>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Bookatrip;
