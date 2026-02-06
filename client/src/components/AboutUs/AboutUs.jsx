import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Map, Users, Star, Heart, Shield, Compass, ArrowLeft, Award } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import backgroundImage from '../../Images/AboutUs.jpg';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Happy Travelers", value: "50k+", icon: <Users className="w-6 h-6" /> },
    { label: "Guided Tours", value: "250+", icon: <Compass className="w-6 h-6" /> },
    { label: "Destinations", value: "20+", icon: <Map className="w-6 h-6" /> },
    { label: "Years Experience", value: "10+", icon: <Award className="w-6 h-6" /> }
  ];

  const teamMembers = [
    { name: "Rahul Kumar", role: "Tour Operator", image: "https://i.pravatar.cc/150?u=rahul" },
    { name: "Sneha Singh", role: "Travel Guide", image: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Amit Verma", role: "Logistics", image: "https://i.pravatar.cc/150?u=amit" },
    { name: "Priya Roy", role: "Support", image: "https://i.pravatar.cc/150?u=priya" }
  ];

  const values = [
    { 
      icon: <Star className="w-6 h-6" />, 
      title: "Excellence", 
      desc: "We strive for perfection in every tour, ensuring unforgettable experiences.",
      color: "blue"
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Passion", 
      desc: "Our love for Jharkhand's beauty drives us to share its wonders with the world.",
      color: "pink"
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Trust", 
      desc: "Safety and reliability are at the core of everything we do for our travelers.",
      color: "green"
    }
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
            <Heart className="w-4 h-4" />
            <span>Est. 2014 • Koderma, Jharkhand</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tighter">
            About Us
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed">
            Curating timeless journeys through the heart of Jharkhand, connecting travelers with nature's hidden treasures.
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative z-10 -mt-12 mx-4 md:mx-auto md:max-w-5xl">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl dark:shadow-none border border-zinc-200 dark:border-zinc-800 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-cyan-400 mb-3">
                {stat.icon}
              </div>
              <span className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white">{stat.value}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-3">Our Purpose</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white">Mission & Vision</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:border-zinc-700 transition-all group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To showcase the hidden gems of Telaiya to the world, providing sustainable and immersive travel experiences that connect people with nature and culture in their purest forms. We believe every journey should leave a lasting impression.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:border-zinc-700 transition-all group">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To establish Telaiya as a premier destination for mindful travelers seeking authentic experiences. We envision a future where tourism empowers local communities while preserving the natural beauty that makes our region unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4">Our Core Values</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-cyan-600 transition-all group text-center"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 ${
                  item.color === 'blue' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-cyan-400' :
                  item.color === 'pink' ? 'bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400' :
                  'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400'
                }`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-zinc-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-3">The People Behind</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4">Meet Our Team</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Passionate locals dedicated to making your journey unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:border-zinc-700 transition-all group text-center"
              >
                <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-zinc-100 dark:ring-zinc-800 group-hover:ring-blue-200 dark:group-hover:ring-cyan-800 transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-sm text-blue-600 dark:text-cyan-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-600 dark:to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Explore With Us?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the beauty of Jharkhand through our carefully crafted experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 dark:text-cyan-600 text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book Your Adventure
            </Link>
            <Link
              to="/discover"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full transition-all hover:bg-white/10"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
