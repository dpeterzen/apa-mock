import { createContext, useState, ReactNode } from "react";

interface StrokeColorContextProps {
  strokeColor: string;
  setStrokeColor: (color: string) => void;
}

export const StrokeColorContext = createContext<StrokeColorContextProps | undefined>(undefined);

export const StrokeColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [strokeColor, setStrokeColor] = useState("currentColor");

  return (
    <StrokeColorContext.Provider value={{ strokeColor, setStrokeColor }}>
      {children}
    </StrokeColorContext.Provider>
  );
};