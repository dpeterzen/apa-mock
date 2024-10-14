import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';
import styles from "./TileGeneratorButton.module.css";

const TileGeneratorButton = () => {
  const handleClick = () => {
    console.log('Tile Generator Button Clicked');
  };

  return (
    <Button
      className={`${styles.tileButton} fixed bottom-4 right-4 w-20 h-20`}
      variant="outline"
      size="icon"
      onClick={handleClick}
    >
        <LayoutDashboard className="w-16 h-16 rotate-90" />
      {/* + */}
    </Button>
  );
};

export default TileGeneratorButton;