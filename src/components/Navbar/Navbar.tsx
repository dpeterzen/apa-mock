import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex items-center justify-between p-4 ${styles.navbar} bg-background dark:border-neutral-900 ${isScrolled ? 'border-b' : ''}`}>
      {/* Left Section: Hamburger Button */}
      <Button className="border-0 hover:bg-background" variant="outline" size="icon">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </Button>
      {/* Center Section: Carousel */}
      <div className="flex-1 flex justify-start">
        {/* New nav component - container flex fill inner space */}
      </div>
      {/* Right Section: Plus Button and Mode Toggle */}
      <div className="flex items-center">
        <Button className="border-0 h-9 w-9" variant="outline" size="icon">
          <Plus className="h-7 w-7" />
          <span className="sr-only">Add</span>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;