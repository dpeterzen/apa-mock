import { useContext } from "react";
import { TitleContext } from "@/context/TitleContext";

export const useTitle = () => useContext(TitleContext);