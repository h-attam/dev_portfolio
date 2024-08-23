import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch, ensure the component is mounted before rendering the theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, don't render the button (to prevent initial mismatches)
  if (!mounted) return null;

  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <button
        className="px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};

export default Header;
