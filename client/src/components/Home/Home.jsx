import { useRef } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../Images/Home_img.jpg";
import { ArrowDown, MapPin, Camera, Heart, Shield } from "lucide-react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../Newsletter/Newsletter";

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
    <div className="flex flex-col min-h-screen font-sans text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950 selection:bg-blue-600 selection:text-white dark:selection:bg-cyan-400 dark:selection:text-black overflow-x-hidden transition-colors duration-300">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20 pointer-events-none z-0"></div>
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
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent dark:from-black/60 dark:via-black/40 dark:to-black/70"></div>
           {/* Light mode specific overlay for readability if needed, usually image is enough or needs to be darker */}
           <div className="absolute inset-0 bg-white/10 dark:bg-transparent mix-blend-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white drop-shadow-md mb-8 tracking-tighter pb-4 animate-fade-in-up uppercase"
          >
            Telaiya Tourism
          </h1>
          <p className="text-xl md:text-2xl text-white/90 dark:text-zinc-200 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up shadow-black/50 drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
            Uncover the hidden gems of Jharkhand. Adventure, serenity, and culture await.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/book"
              className="px-8 py-4 bg-white text-black text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-white"
            >
              Plan Your Trip
            </Link>
            <button
              onClick={scrollToContent}
              className="px-8 py-4 backdrop-blur-md bg-white/10 dark:bg-black/20 text-white border border-white/30 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
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
      <section ref={scrollRef} className="py-24 px-4 md:px-8 bg-white dark:bg-zinc-950 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
            <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-3">Discover</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white mb-6">Top Destinations</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">From shimmering dams to cascading waterfalls, explore the most breathtaking spots Telaiya has to offer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {destinations.map((dest) => (
              <Link to={dest.link} key={dest.id} className="group relative rounded-3xl overflow-hidden glass dark:border-white/10 border-zinc-200 h-[500px] block shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100 dark:opacity-80 dark:group-hover:opacity-100"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="w-12 h-1 bg-white dark:bg-cyan-400 mb-4 w-0 group-hover:w-12 transition-all duration-500"></div>
                  <h4 className="text-2xl font-bold text-white mb-2">{dest.title}</h4>
                  <p className="text-gray-200 line-clamp-2">{dest.description}</p>
                  <div className="mt-4 flex items-center text-white dark:text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    See Details <ArrowDown className="ml-2 w-4 h-4 -rotate-90" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative overflow-hidden border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-zinc-900 dark:text-white">
                Why <span className="text-blue-600 dark:text-cyan-400">Telaiya</span> <br/> Should Be Your Next Stop
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Nestled in the heart of nature, Telaiya offers a perfect blend of adventure, spirituality, and relaxation.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-cyan-400" />, title: "Exquisite Locations", desc: "Handpicked spots that showcase the best of nature." },
                  { icon: <Camera className="w-6 h-6 text-purple-600 dark:text-purple-400" />, title: "Photographer's Paradise", desc: "Capture memories with stunning landscapes as your backdrop." },
                  { icon: <Shield className="w-6 h-6 text-pink-600 dark:text-pink-400" />, title: "Safe & Guided Tours", desc: "Experience worry-free travel with our expert guidance." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/10">
                    <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-zinc-100 dark:border-transparent">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display text-zinc-900 dark:text-white">{item.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <img src={waterfallImg} alt="Waterfall" className="rounded-2xl shadow-2xl transform translate-y-12 grayscale hover:grayscale-0 transition-all duration-700" />
                 <img src={damImg} alt="Dam" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
