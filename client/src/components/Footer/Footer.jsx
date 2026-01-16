import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 relative pt-16 pb-8 overflow-hidden font-sans border-t border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group">
                <span className="text-2xl font-display font-medium tracking-tight text-zinc-900 dark:text-white transition-colors">
                  Telaiya<span className="text-zinc-500 dark:text-zinc-500">Tourism</span>
                </span>
             </Link>
             <p className="text-zinc-500 dark:text-zinc-500 mb-6 leading-relaxed font-light">
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
                    className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
             </div>
          </div>

           {/* Quick Links */}
           <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-4">
                 {[
                   { label: "Home", path: "/" },
                   { label: "Check Destinations", path: "/discover" },
                   { label: "About Us", path: "/about" },
                   { label: "Contact Us", path: "/contact" }
                 ].map((link, idx) => (
                   <li key={idx}>
                     <Link to={link.path} className="text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2 group">
                        {link.label}
                     </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Support */}
           <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-6">Support</h4>
              <ul className="space-y-4">
                 {[
                   { label: "FAQ", path: "#" },
                   { label: "Terms of Service", path: "#" },
                   { label: "Privacy Policy", path: "#" },
                   { label: "Booking Policy", path: "#" }
                 ].map((link, idx) => (
                   <li key={idx}>
                     <Link to={link.path} className="text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        {link.label}
                     </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info */}
           <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-500">
                   <MapPin className="text-zinc-900 dark:text-white mt-1 shrink-0" size={16} />
                   <span>Koderma, Jharkhand, India - 825410</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-500">
                   <Phone className="text-zinc-900 dark:text-white shrink-0" size={16} />
                   <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-500">
                   <Mail className="text-zinc-900 dark:text-white shrink-0" size={16} />
                   <span>info@telaiyatourism.com</span>
                </li>
              </ul>
           </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-600">
            © {currentYear} Telaiya Tourism. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-600 flex items-center gap-1">
            Built with <span className="text-zinc-900 dark:text-white">♥️</span> by{" "}
            <span className="font-semibold text-zinc-900 dark:text-white cursor-pointer">
              @xeylous
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}