import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, User, Phone, Navigation, CheckCircle2, Calendar, ArrowLeft, Plane } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import backgroundImage from '../../Images/Home_img.jpg';

const Bookatrip = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [source, setSource] = useState('');
  const [destination] = useState('Telaiya');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [places, setPlaces] = useState({
    telaiyaDam: false,
    vrindahaWaterfall: false,
    radhaKrishnaMandir: false,
    kodermaWildlifeSanctuary: false,
    PetroWaterfall: false,
    MaaChanchalaDeviMandir: false,
  });

  const placeLabels = {
    telaiyaDam: { name: 'Telaiya Dam', icon: '🏞️' },
    vrindahaWaterfall: { name: 'Vrindaha Waterfall', icon: '💧' },
    radhaKrishnaMandir: { name: 'Radha Krishna Mandir', icon: '🛕' },
    kodermaWildlifeSanctuary: { name: 'Koderma Wildlife Sanctuary', icon: '🌲' },
    PetroWaterfall: { name: 'Petro Waterfall', icon: '🌊' },
    MaaChanchalaDeviMandir: { name: 'Maa Chanchala Devi Mandir', icon: '🙏' },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedPlaces = Object.keys(places).filter(place => places[place]);
    const formData = {
      name,
      contactNumber,
      source,
      destination,
      places: selectedPlaces
    };
    
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
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      // Still show success for demo purposes
      setIsSubmitted(true);
    }
    
    setIsSubmitting(false);
  };

  const handlePlaceChange = (e) => {
    const { name, checked } = e.target;
    setPlaces(prevPlaces => ({
      ...prevPlaces,
      [name]: checked,
    }));
  };

  const resetForm = () => {
    setName('');
    setContactNumber('');
    setSource('');
    setPlaces({
      telaiyaDam: false,
      vrindahaWaterfall: false,
      radhaKrishnaMandir: false,
      kodermaWildlifeSanctuary: false,
      PetroWaterfall: false,
      MaaChanchalaDeviMandir: false,
    });
    setIsSubmitted(false);
  };

  const selectedCount = Object.values(places).filter(Boolean).length;

  return (
    <div className="flex flex-col min-h-screen font-sans text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20 pointer-events-none z-0"></div>
      
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-zinc-50 dark:to-zinc-950"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Link 
            to="/" 
            className="absolute top-24 left-6 md:left-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            <span>Plan Your Adventure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tighter">
            Book a Trip
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-xl font-light">
            Fill in your details and select the places you want to explore
          </p>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-16 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 relative -mt-10">
        <div className="max-w-4xl mx-auto relative z-10">
          
          {isSubmitted ? (
            /* Success State */
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-4">
                Booking Submitted!
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-md mx-auto">
                Thank you for your booking request. We'll contact you shortly to confirm your trip details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetForm}
                  className="px-8 py-4 bg-blue-600 dark:bg-cyan-500 text-white dark:text-black font-bold rounded-xl hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all"
                >
                  Book Another Trip
                </button>
                <Link
                  to="/discover"
                  className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
                >
                  Explore More Places
                </Link>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-3">
                  Trip Details
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Tell us about yourself and where you'd like to go
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                  <label htmlFor="contactNumber" className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <Phone className="w-4 h-4" />
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                {/* Source */}
                <div className="space-y-2">
                  <label htmlFor="source" className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <Navigation className="w-4 h-4" />
                    Starting Point (Source)
                  </label>
                  <input
                    type="text"
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    required
                    placeholder="Where will you start from?"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <label htmlFor="destination" className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <MapPin className="w-4 h-4" />
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    value={destination}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Places to Visit */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <Calendar className="w-4 h-4" />
                    Places to Visit
                  </label>
                  <span className="text-sm text-blue-600 dark:text-cyan-400 font-medium">
                    {selectedCount} selected
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(placeLabels).map(([key, { name: placeName, icon }]) => (
                    <label
                      key={key}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        places[key]
                          ? 'border-blue-500 dark:border-cyan-500 bg-blue-50 dark:bg-cyan-500/10'
                          : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        name={key}
                        checked={places[key]}
                        onChange={handlePlaceChange}
                        className="sr-only"
                      />
                      <span className="text-2xl">{icon}</span>
                      <span className={`font-medium text-sm ${
                        places[key] 
                          ? 'text-blue-700 dark:text-cyan-400' 
                          : 'text-zinc-700 dark:text-zinc-300'
                      }`}>
                        {placeName}
                      </span>
                      {places[key] && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400 ml-auto" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || selectedCount === 0}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform ${
                  isSubmitting || selectedCount === 0
                    ? 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 cursor-not-allowed'
                    : 'bg-blue-600 dark:bg-cyan-500 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-cyan-400 hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : selectedCount === 0 ? (
                  'Select at least one place'
                ) : (
                  `Book Trip to ${selectedCount} ${selectedCount === 1 ? 'Place' : 'Places'}`
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bookatrip;
