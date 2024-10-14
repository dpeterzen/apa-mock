import React from 'react';
import WallTitle from "@/components/Walls/Wall/WallTitle";
import ResponsiveWallLayoutDemo from "./ResponsiveWallLayoutDemo";

const Wall: React.FC = () => {
  // Define the required props for ResponsiveWallLayoutDemo
  const items = [1, 2, 3, 4, 5]; // Example value, adjust as needed
  const cols = 12; // Example value, adjust as needed
  const rowHeight = 30; // Example value, adjust as needed

  interface Layout {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
  }

  const onLayoutChange = (layout: Layout[]) => {
    console.log("Layout changed:", layout);
  };

  return (
    <>
      <WallTitle />
      <ResponsiveWallLayoutDemo
        items={items}
        cols={cols}
        rowHeight={rowHeight}
        onLayoutChange={onLayoutChange}
      />
    </>
  );
};

export default Wall;