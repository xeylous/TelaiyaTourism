import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.15)]">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get the Latest Updates
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-md">
              Subscribe to our newsletter and receive exclusive travel tips, hidden gem alerts, and seasonal offers directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all backdrop-blur-sm"
                />
              </div>
              <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group shadow-lg">
                Subscribe
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-4 text-xs text-blue-200/80">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          <div className="hidden lg:flex justify-end relative">
            {/* Visual element or illustration could go here */}
            {/* For now, a stylized envelope or just composition spacing */}
             <div className="w-64 h-64 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-2xl rotate-12 opacity-80 backdrop-blur-xl absolute right-12 -top-12 animate-float"></div>
             <div className="w-64 h-64 bg-white/10 border border-white/20 rounded-2xl -rotate-6 backdrop-blur-md z-10 flex items-center justify-center">
                <Send size={64} className="text-white opacity-80" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
