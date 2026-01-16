import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black relative pt-16 pb-8 overflow-hidden font-sans border-t border-white/5">
       {/* Background Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group">
                <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-neon-blue transition-colors text-glow">
                  Telaiya<span className="text-neon-blue">Tourism</span>
                </span>
             </Link>
             <p className="text-gray-400 mb-6 leading-relaxed">
               Discover the hidden gems of Jharkhand. From serene dams to lush sanctuaries, your perfect adventure awaits.
             </p>
             <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" }
                ].map(({ Icon, href }, idx) => (
                  <a 
                    key={idx} 
                    href={href} 
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-blue/50"
                  >
                    <Icon size={18} />
                  </a>
                ))}
             </div>
          </div>

           {/* Quick Links */}
           <div>
              <h4 className="text-lg font-bold text-white mb-6 font-display">Quick Links</h4>
              <ul className="space-y-4">
                 {[
                   { label: "Home", path: "/" },
                   { label: "Check Destinations", path: "/discover" },
                   { label: "About Us", path: "/about" },
                   { label: "Contact Us", path: "/contact" }
                 ].map((link, idx) => (
                   <li key={idx}>
                     <Link to={link.path} className="text-gray-400 hover:text-neon-blue transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.label}
                     </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Support */}
           <div>
              <h4 className="text-lg font-bold text-white mb-6 font-display">Support</h4>
              <ul className="space-y-4">
                 {[
                   { label: "FAQ", path: "#" },
                   { label: "Terms of Service", path: "#" },
                   { label: "Privacy Policy", path: "#" },
                   { label: "Booking Policy", path: "#" }
                 ].map((link, idx) => (
                   <li key={idx}>
                     <Link to={link.path} className="text-gray-400 hover:text-neon-blue transition-colors">
                        {link.label}
                     </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info */}
           <div>
              <h4 className="text-lg font-bold text-white mb-6 font-display">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                   <MapPin className="text-neon-blue mt-1 shrink-0" size={18} />
                   <span>Koderma, Jharkhand, India - 825410</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                   <Phone className="text-neon-blue shrink-0" size={18} />
                   <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                   <Mail className="text-neon-blue shrink-0" size={18} />
                   <span>info@telaiyatourism.com</span>
                </li>
              </ul>
           </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Telaiya Tourism. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with <span className="animate-pulse text-neon-pink">♥️</span> by{" "}
            <span className="font-semibold text-white hover:text-neon-blue transition-colors cursor-pointer">
              @xeylous
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}