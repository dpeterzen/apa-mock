// useStrokeColor.ts
import { useContext } from 'react';
import { StrokeColorContext } from "@/context/StrokeColorContext";

const useStrokeColor = () => {
  const context = useContext(StrokeColorContext);
  if (!context) {
    throw new Error("useStrokeColor must be used within a StrokeColorProvider");
  }
  return context;
};

export default useStrokeColor;