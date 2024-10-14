// import { createContext, useState, useContext, ReactNode } from 'react';

// interface Wall {
//   id: number;
//   title: string;
// }

// interface WallContextType {
//   walls: Wall[];
//   updateWallTitle: (id: number, title: string) => void;
// }

// const WallContext = createContext<WallContextType | undefined>(undefined);

// export const WallProvider = ({ children }: { children: ReactNode }) => {
//   const [walls, setWalls] = useState<Wall[]>([{ id: 1, title: "apa.io" }]);

//   const updateWallTitle = (id: number, title: string) => {
//     setWalls((prevWalls) =>
//       prevWalls.map((wall) =>
//         wall.id === id ? { ...wall, title } : wall
//       )
//     );
//   };

//   return (
//     <WallContext.Provider value={{ walls, updateWallTitle }}>
//       {children}
//     </WallContext.Provider>
//   );
// };

// export const useWallContext = () => {
//   const context = useContext(WallContext);
//   if (!context) {
//     throw new Error('useWallContext must be used within a WallProvider');
//   }
//   return context;
// };