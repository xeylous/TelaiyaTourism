import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ArrowLeft, Navigation, Info, Droplets } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PetroImage from '../../Images/PetroWaterfalls.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';

const PetroWaterfall = () => {
  const images = [PetroImage, PetroImage, PetroImage];

  const highlights = [
    { icon: <Clock className="w-5 h-5" />, label: "Best Time", value: "July - Oct" },
    { icon: <Calendar className="w-5 h-5" />, label: "Duration", value: "3-4 Hours" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Koderma, Jharkhand" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20 pointer-events-none z-0"></div>
      
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${PetroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-zinc-50 dark:to-zinc-950"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Back Button */}
          <Link 
            to="/discover" 
            className="absolute top-24 left-6 md:left-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Discover</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
            <Droplets className="w-4 h-4" />
            <span>Waterfall</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tighter">
            Petro Waterfall
          </h1>
          
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>Koderma District, Jharkhand</span>
          </div>
        </div>
      </header>

      {/* Quick Info Bar */}
      <section className="relative z-10 -mt-12 mx-4 md:mx-auto md:max-w-4xl">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl dark:shadow-none border border-zinc-200 dark:border-zinc-800 p-6 grid grid-cols-3 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 mb-2">
                {item.icon}
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.label}</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{ clickable: true }}
                  modules={[SwiperNavigation, Pagination]}
                  className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
                >
                  {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`Petro Waterfall ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Description & Map */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl">
                    <Info className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-zinc-900 dark:text-white">About Petro Waterfall</h2>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    Petro Waterfall is a <strong className="text-zinc-900 dark:text-white">spectacular natural wonder</strong> that showcases the raw beauty of Jharkhand's landscape. The waterfall cascades down from significant heights, creating a thunderous roar that can be heard from afar.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    Surrounded by rocky terrain and lush vegetation, Petro Waterfall offers an adventurous trek for nature enthusiasts. The journey to the falls takes you through scenic trails with stunning views of the surrounding hills.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    During monsoon season, the waterfall is at its most magnificent, with powerful streams of water creating a misty atmosphere. Visitors can enjoy the cool spray and take memorable photographs of this pristine natural attraction.
                  </p>
                </div>
              </div>

              {/* Location & Map */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-zinc-900 dark:text-white">Location</h2>
                </div>
                
                <div className="w-full h-[300px] rounded-xl overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-700">
                  <iframe
                    title="Petro Waterfall Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5!2d85.5!3d24.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzM2LjAiTiA4NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1694514923456!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale dark:grayscale-0 dark:opacity-90"
                  ></iframe>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Petro+Waterfall+Koderma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-emerald-600 dark:bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>

              {/* Book Trip CTA */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-600 dark:to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-display font-bold mb-3">Ready to Visit?</h3>
                <p className="text-white/80 mb-6">Book your trip to Petro Waterfall and witness nature's power.</p>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-zinc-100 transition-all"
                >
                  Book Your Trip
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetroWaterfall;
