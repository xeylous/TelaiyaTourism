import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
        theme === 'light' ? 'text-amber-500' : theme === 'dark' ? 'text-blue-400' : 'text-zinc-500 dark:text-zinc-400'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun size={20} />}
      {theme === 'dark' && <Moon size={20} />}
      {theme === 'system' && <Monitor size={20} />}
      
      {/* Tooltip-ish indicator */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-1 rounded">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </span>
    </button>
  );
};

export default ThemeToggle;
