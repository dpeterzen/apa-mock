import { Button } from '@/components/ui/button';
import { Plus, LayoutDashboard } from 'lucide-react';

const TileGeneratorButton = () => {
  const handleClick = () => {
    console.log('Tile Generator Button Clicked');
  };

  return (
    <Button
      className="absolute top-16 right-4 w-16 h-16"
      variant="outline"
      size="icon"
      onClick={handleClick}
    >
        <LayoutDashboard className="w-12 h-12 rotate-90" />
      {/* + */}
    </Button>
  );
};

export default TileGeneratorButton;