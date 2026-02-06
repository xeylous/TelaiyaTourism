import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Card = ({ username, content, image, link, category }) => {
  return (
    <Link 
      to={link}
      className="group relative max-w-sm w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg dark:shadow-none hover:shadow-2xl dark:hover:border-zinc-700 overflow-hidden m-4 transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={image} 
          alt={username} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-semibold text-zinc-800 dark:text-white border border-white/20">
            {category}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h5 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
          {username}
        </h5>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {content}
        </p>
        
        {/* Explore Link */}
        <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
          <span>Read more</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-cyan-500/10 dark:to-blue-500/10"></div>
      </div>
    </Link>
  );
}

export default Card;
