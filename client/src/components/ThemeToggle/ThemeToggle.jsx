import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ isHeroMode = false }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIconColor = () => {
    if (isHeroMode) {
      return 'text-white hover:bg-white/10';
    }
    if (theme === 'light') return 'text-amber-500 hover:bg-zinc-100';
    if (theme === 'dark') return 'text-blue-400 hover:bg-zinc-800';
    return 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800';
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-all duration-300 ${getIconColor()}`}
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
