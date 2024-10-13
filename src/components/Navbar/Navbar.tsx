import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, LayoutDashboard } from 'lucide-react';
import Tooltip from "@/components/ui/tooltip";
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
      {/* Left Section */}
      <Tooltip text={"Open/close sidebar"}>
        <Button className="border-0 h-8 w-8" variant="outline" size="icon">
          <LayoutDashboard className="w-6 h-6 rotate-90" />
        </Button>
      </Tooltip>
      {/* Center Section */}
      <div className="flex-1 flex justify-start">
        {/* Title nav component - container flex fill inner space */}
      </div>
      {/* Right Section */}
      <div className="flex items-center">
      <Tooltip text={"New wall"}>
        <Button className="border-0 h-8 w-8" variant="outline" size="icon">
          <Plus className="h-6 w-6" />
          <span className="sr-only">Add</span>
        </Button>
      </Tooltip>
      <span className={styles.tooltip}>
        <NavbarOptions />
        <span className={`${styles.tooltiptext} mx-2 my-1 z-[1001] overflow-hidden rounded-md border bg-white dark:bg-zinc-700 px-1.5 pb-0.5 pt-[0.1rem] text-base text-popover-foreground shadow-md`}>
          More actions
        </span>
      </span>
      </div>
    </nav>
  );
};

export default Navbar;