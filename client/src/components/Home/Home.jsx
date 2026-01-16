import { useRef } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../Images/Home_img.jpg";
import { ArrowDown, MapPin, Camera, Heart, Shield } from "lucide-react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// Placeholder images - using imports or external if needed. 
// Assuming some exist based on listing, mapping to best guesses or reusing.
import damImg from "../../Images/Tilaiya_dam1.jpg";
import waterfallImg from "../../Images/PetroWaterfalls.jpeg";
import contactBg from "../../Images/discover_img.jpg"; // Using for card

const Home = () => {
  const scrollRef = useRef(null);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const destinations = [
    {
      id: 1,
      title: "Telaiya Dam",
      description: "Experience the serenity of the majestic Telaiya Dam.",
      image: damImg,
      link: "/discover"
    },
    {
      id: 2,
      title: "Petro Waterfalls",
      description: "Discover the hidden cascading beauty of nature.",
      image: waterfallImg,
      link: "/discover"
    },
    {
      id: 3,
      title: "Koderma Sanctuary",
      description: "Explore the diverse wildlife and lush greenery.",
      image: contactBg,
      link: "/discover"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 transform scale-105 animate-slow-zoom"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg mb-6 tracking-tight pb-2 animate-fade-in-up"
            style={{ fontFamily: "'Montserrat', sans-serif" }} // Fallback or imported font
          >
            Telaiya Tourism
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Uncover the hidden gems of Jharkhand. Adventure, serenity, and culture await.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/book"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30"
            >
              Plan Your Trip
            </Link>
            <button
              onClick={scrollToContent}
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore More
            </button>
          </div>

          <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={scrollToContent}>
            <ArrowDown className="text-white/80 w-10 h-10" />
          </div>
        </div>
      </header>

      {/* Featured Destinations */}
      <section ref={scrollRef} className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Discover</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Destinations</h3>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From shimmering dams to cascading waterfalls, explore the most breathtaking spots Telaiya has to offer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {destinations.map((dest) => (
              <Link to={dest.link} key={dest.id} className="group relative rounded-3xl overflow-hidden shadow-2xl h-[400px] block">
                <div className="absolute inset-0 bg-gray-900">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-2xl font-bold text-white mb-2">{dest.title}</h4>
                  <p className="text-gray-200 line-clamp-2">{dest.description}</p>
                  <div className="mt-4 flex items-center text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    See Details <ArrowDown className="ml-2 w-4 h-4 -rotate-90" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Why <span className="text-blue-500">Telaiya</span> <br/> Should Be Your Next Stop
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Nestled in the heart of nature, Telaiya offers a perfect blend of adventure, spirituality, and relaxation.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin className="w-6 h-6 text-blue-500" />, title: "Exquisite Locations", desc: "Handpicked spots that showcase the best of nature." },
                  { icon: <Camera className="w-6 h-6 text-purple-500" />, title: "Photographer's Paradise", desc: "Capture memories with stunning landscapes as your backdrop." },
                  { icon: <Shield className="w-6 h-6 text-green-500" />, title: "Safe & Guided Tours", desc: "Experience worry-free travel with our expert guidance." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <img src={waterfallImg} alt="Waterfall" className="rounded-2xl shadow-lg transform translate-y-12" />
                 <img src={damImg} alt="Dam" className="rounded-2xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
