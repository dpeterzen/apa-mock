import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";
import DynamicMinMaxLayout from "@/components/DynamicMinMaxLayout";
import TileGeneratorButton from "@/components/TileGenerator/TileGeneratorButton";
import WallTitle from "@/components/Wall/WallTitle";

function App() {

  // Define the required props for DynamicMinMaxLayout
  const items = 4; // Example value, adjust as needed
  const cols = 12; // Example value, adjust as needed
  const isDraggable = true; // Example value, adjust as needed
  const isResizable = true; // Example value, adjust as needed
  const rowHeight = 30; // Example value, adjust as needed
  const onLayoutChange = (layout) => {
    console.log("Layout changed:", layout);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <WallTitle />
        <DynamicMinMaxLayout
          items={items}
          cols={cols}
          isDraggable={isDraggable}
          isResizable={isResizable}
          rowHeight={rowHeight}
          onLayoutChange={onLayoutChange}
        />
        <TileGeneratorButton />
    </ThemeProvider>
  );
}

export default App;