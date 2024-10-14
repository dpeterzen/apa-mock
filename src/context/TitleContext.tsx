import { createContext, useState, Dispatch, SetStateAction } from "react";

interface TitleContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const defaultValue: TitleContextType = {
  title: "apa.io",
  setTitle: () => {},
};

export const TitleContext = createContext<TitleContextType>(defaultValue);

import { ReactNode } from "react";

export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState(defaultValue.title);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};