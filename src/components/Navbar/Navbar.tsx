import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, LayoutDashboard } from 'lucide-react';
import Tooltip from "@/components/ui/tooltip";
import NavbarOptions from './NavbarOptions';
import styles from './Navbar.module.css';
import { useTitle } from "@/hooks/useTitle";
import { truncateTitle } from '@/lib/utils';

const Navbar = () => {
  const { title } = useTitle();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      setIsTitleVisible(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (titleRef.current) {
        const titleElement = titleRef.current;
        const parentWidth = titleElement.parentElement?.offsetWidth || 0;
        titleElement.style.maxWidth = `${parentWidth * 0.45}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [title]);

  return (
    <nav className={`flex items-center justify-between px-3 h-14 ${styles.navbar} bg-background dark:border-neutral-900 ${isScrolled ? 'border-b' : ''}`}>
      {/* Left Section */}
      <Tooltip text={"Open/close sidebar"}>
        <Button className="fixed top-[3px] left-3 border-0 h-[52px] w-8 rounded-[4px]" variant="outline" size="icon">
          <LayoutDashboard className="w-6 h-6 rotate-90" />
        </Button>
      </Tooltip>
      {/* Center Section */}
      <div className="flex-1 flex justify-center">
        <h1
          ref={titleRef}
          className={`font-bold truncate text-center transition-opacity duration-300 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {truncateTitle(title, 75)}
        </h1>
      </div>
      {/* Right Section */}
      <div className="flex items-center fixed top-[3px] right-3">
        <Tooltip text={"New wall"}>
          <Button className="border-0 h-[52px] w-8 rounded-[4px]" variant="outline" size="icon">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add</span>
          </Button>
        </Tooltip>
        <span className={styles.tooltip}>
          <NavbarOptions />
          <span className={`${styles.tooltiptext} mx-2 my-1 z-[1001] overflow-hidden rounded-md border bg-white dark:bg-zinc-700 px-1.5 pb-0.5 pt-[0.1rem] text-[15px] text-popover-foreground shadow-md`}>
            More actions
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;