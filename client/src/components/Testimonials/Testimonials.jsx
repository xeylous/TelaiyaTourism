import { Star, Quote } from "lucide-react";

// Mock data for testimonials
const REVIEWS = [
  {
    id: 1,
    name: "Aarav Singh",
    role: "Adventure Enthusiast",
    content: "Telaiya Dam was an absolute revelation! The sunset boat ride is something I'll cherish forever. Highly recommended for weekend getaways.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Travel Blogger",
    content: "The hidden waterfalls are magical. It feels like an untouched paradise. The local guides were so friendly and helpful!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Photographer",
    content: "A photographer's dream. The lighting at early dawn over the sanctuary is just perfect. Captured some of my best shots here.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-400/20 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4">What Travelers Say</h3>
          <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from real travelers who found their next adventure with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={review.id}
              className="bg-white dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl flex flex-col relative animate-fade-in-up hover:shadow-xl dark:hover:bg-white/10 transition-all border border-zinc-200 dark:border-white/10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-zinc-200 dark:text-white/10">
                <Quote size={48} className="fill-current transform rotate-180" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "" : "text-zinc-300 dark:text-gray-700"}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-600 dark:text-gray-300 italic mb-8 flex-grow leading-relaxed relative z-10">
                "{review.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{review.name}</h4>
                  <p className="text-blue-600 dark:text-cyan-400 text-xs font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
