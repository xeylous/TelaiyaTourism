import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import backgroundImage from '../../Images/AboutUs.jpg';
import Footer from '../Footer/Footer';
import { Target, Eye, Layout, Map, Users, Star } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Travelers", value: "50k+" },
    { label: "Tours", value: "250+" },
    { label: "Destinations", value: "20+" },
    { label: "Experience", value: "10y" }
  ];

  const teamMembers = [
    { name: "Rahul Kumar", role: "Tour Operator", image: "https://i.pravatar.cc/150?u=rahul" },
    { name: "Sneha Singh", role: "Travel Guide", image: "https://i.pravatar.cc/150?u=sneha" },
    { name: "Amit Verma", role: "Logistics", image: "https://i.pravatar.cc/150?u=amit" },
    { name: "Priya Roy", role: "Support", image: "https://i.pravatar.cc/150?u=priya" }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-950 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-black overflow-x-hidden transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        <div 
          className="absolute inset-0 z-0 grayscale opacity-80 dark:opacity-60"
          style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
           <div className="absolute inset-0 bg-white/40 dark:bg-zinc-950/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
             <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">Est. 2014</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 dark:text-white mb-6 tracking-tight">
            About Telaiya
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            Curating timeless journeys through the heart of Jharkhand.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-900 overflow-hidden rounded-2xl shadow-sm dark:shadow-none">
            {/* Mission */}
            <div className="bg-white dark:bg-zinc-950 p-10 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-500 group">
               <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center mb-8 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-700 transition-colors">
                  <Target size={28} strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-display font-medium text-zinc-900 dark:text-white mb-4">Our Mission</h3>
               <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-light">
                 To showcase the hidden gems of Telaiya to the world, providing sustainable and immersive travel experiences that connect people with nature and culture in their purest forms.
               </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-zinc-950 p-10 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-500 group">
               <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center mb-8 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-700 transition-colors">
                  <Eye size={28} strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-display font-medium text-zinc-900 dark:text-white mb-4">Our Vision</h3>
               <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-light">
                 To define the future of local tourism through minimalist luxury and authentic storytelling. We envision Telaiya as a global destination for the discerning traveler.
               </p>
            </div>
         </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center" >
            {stats.map((stat, idx) => (
               <div key={idx} className="group">
                  <h4 className="text-5xl md:text-6xl font-display font-medium text-zinc-900 dark:text-white mb-3 tracking-tighter">{stat.value}</h4>
                  <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-medium">{stat.label}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Core Values - Grid */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
         <div className="max-w-6xl mx-auto">
            <div className="mb-16">
               <h3 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white mb-4">Why Choose Us</h3>
               <p className="text-zinc-600 dark:text-zinc-500 text-lg font-light">Precision in every detail.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { icon: Star, title: "Excellence", desc: "Uncompromising quality." },
                  { icon: Map, title: "Expertise", desc: "Local mastery, global standards." },
                  { icon: Layout, title: "Curation", desc: "Tailored for the individual." }
               ].map((item, idx) => (
                  <div key={idx} className="border-t border-zinc-300 dark:border-zinc-800 pt-8 group hover:border-black dark:hover:border-white transition-colors duration-500">
                     <item.icon className="w-7 h-7 text-zinc-900 dark:text-white mb-6 stroke-1" />
                     <h4 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                     <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Section - Monochromatic */}
      <section className="py-20 px-4 bg-zinc-100 dark:bg-zinc-900/30">
         <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-display font-medium text-zinc-900 dark:text-white mb-12 text-center">Our Team</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
               {teamMembers.map((member, idx) => (
                  <div key={idx} className="bg-white dark:bg-zinc-950 p-8 flex flex-col items-center text-center group hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                     <div className="w-24 h-24 mb-6 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{member.name}</h4>
                     <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider">{member.role}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
