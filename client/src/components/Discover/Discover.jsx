import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Compass, Mountain, TreePine } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TelaiyaDamImage from "../../Images/Tilaiya_dam.jpeg";
import BrindahaWaterfall from "../../Images/Brindaha_img.png";
import backgroundImage from "../../Images/discover_img.jpg";
import RadhaKrishnaMandir from "../../Images/RadhaKrishnaMandir_img.jpg";
import WildlifeSanctuary from "../../Images/WildlifeSanctuary.jpg";
import PanchkheroDam from "../../Images/panchkheroDam.jpg";
import PetroWaterfall from "../../Images/PetroWaterfalls.jpeg";

const destinations = [
  {
    id: 1,
    name: "Telaiya Dam",
    description: "A majestic dam nestled in the hills, offering breathtaking views and serene waters perfect for a peaceful retreat.",
    image: TelaiyaDamImage,
    link: "/discover/TelaiyaDam",
    category: "Dam",
    icon: <Mountain className="w-4 h-4" />,
  },
  {
    id: 2,
    name: "Vrindaha Waterfall",
    description: "A hidden gem cascading through lush greenery, creating a mesmerizing natural spectacle.",
    image: BrindahaWaterfall,
    link: "/discover/VrindahaWaterfall",
    category: "Waterfall",
    icon: <TreePine className="w-4 h-4" />,
  },
  {
    id: 3,
    name: "Radha Krishna Mandir",
    description: "A sacred temple radiating spiritual tranquility, adorned with beautiful architecture and divine ambiance.",
    image: RadhaKrishnaMandir,
    link: "/discover/RadhaKrishnaMandir",
    category: "Temple",
    icon: <Compass className="w-4 h-4" />,
  },
  {
    id: 4,
    name: "Petro Waterfall",
    description: "Experience the thundering beauty of nature as water cascades down ancient rock formations.",
    image: PetroWaterfall,
    link: "/discover/PetroWaterfall",
    category: "Waterfall",
    icon: <TreePine className="w-4 h-4" />,
  },
  {
    id: 5,
    name: "Maa Chanchala Devi Mandir",
    description: "A revered pilgrimage site where devotees seek blessings amidst peaceful surroundings.",
    image: PanchkheroDam,
    link: "/discover/MaaChanchalaDeviMandir",
    category: "Temple",
    icon: <Compass className="w-4 h-4" />,
  },
  {
    id: 6,
    name: "Koderma Wildlife Sanctuary",
    description: "Explore diverse flora and fauna in this pristine sanctuary, a paradise for nature enthusiasts.",
    image: WildlifeSanctuary,
    link: "/discover/KodermaWildlifeSanctuary",
    category: "Sanctuary",
    icon: <TreePine className="w-4 h-4" />,
  },
];

const Discover = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950 selection:bg-blue-600 selection:text-white dark:selection:bg-cyan-400 dark:selection:text-black overflow-x-hidden transition-colors duration-300">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20 pointer-events-none z-0"></div>
      
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 transform scale-105"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-zinc-50 dark:to-zinc-950"></div>
          <div className="absolute inset-0 bg-white/10 dark:bg-transparent mix-blend-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6 animate-fade-in-up">
            <Compass className="w-4 h-4" />
            <span>Explore Jharkhand's Hidden Treasures</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tighter animate-fade-in-up uppercase">
            Discover
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 font-light leading-relaxed animate-fade-in-up drop-shadow-sm" style={{ animationDelay: "0.2s" }}>
            Embark on a journey through pristine waterfalls, ancient temples, and serene landscapes that will leave you spellbound.
          </p>

          <div className="flex items-center gap-4 text-white/80 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>6 Destinations</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <span>Koderma, Jharkhand</span>
          </div>
        </div>
      </header>

      {/* Destinations Grid Section */}
      <section className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-300">
        {/* Decorative blur elements */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[400px] bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[300px] bg-purple-400/10 dark:bg-purple-600/20 rounded-full blur-[100px] -z-10 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-3">
              Destinations
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-6">
              Choose Your Adventure
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Each destination offers a unique experience. Click on any card to explore more details and plan your visit.
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Link
                to={dest.link}
                key={dest.id}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none hover:shadow-2xl dark:hover:border-zinc-700 transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-semibold text-zinc-800 dark:text-white border border-white/20">
                    {dest.icon}
                    <span>{dest.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {dest.description}
                  </p>
                  
                  {/* Explore Link */}
                  <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Explore Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:to-blue-500/10"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Book your adventure today and experience the untouched beauty of Jharkhand's finest destinations.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-cyan-500 text-white dark:text-black text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:bg-blue-700 dark:hover:bg-cyan-400"
          >
            Book Your Trip
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discover;
