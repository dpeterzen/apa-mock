import React from 'react';
import WallTitle from "@/components/Walls/Wall/WallTitle";
import DynamicMinMaxLayoutDemo from "./DynamicMinMaxLayoutDemo";

const Wall: React.FC = () => {
  return (
    <>
      <WallTitle />
      <DynamicMinMaxLayoutDemo />
    </>
  );
};

export default Wall;