import { useContext } from "react";
import { TitleContext } from "@/context/TitleContext";

export const useTitle = () => {
    const context = useContext(TitleContext);
    if (!context) {
      throw new Error("useTitle must be used within a TitleProvider");
    }
    return context;
  };