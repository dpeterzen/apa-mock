import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { EllipsisVertical ,Ellipsis, Plus } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import NavbarOptions from './NavbarOptions';
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
    <nav className={`flex items-center justify-between px-3 h-14 ${styles.navbar} bg-background dark:border-neutral-900 ${isScrolled ? 'border-b' : ''}`}>
      {/* Left Section: Hamburger Button */}
      <Button className="border-0 hover:bg-background" variant="outline" size="icon">

        <svg
          className="lucide lucide-layout-dashboard w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
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
        <NavbarOptions />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;