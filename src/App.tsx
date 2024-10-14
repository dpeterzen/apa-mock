import { ThemeProvider } from "@/components/theme-provider";
import { StrokeColorProvider } from "@/context/StrokeColorContext";
import Navbar from "@/components/Navbar/Navbar";
import TileGeneratorButton from "@/components/TileGenerator/TileGeneratorButton";
import Wall from "@/components/Walls/Wall/Wall";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";
import { TitleProvider } from "./context/TitleContext";

function App() {

  return (
    <StrokeColorProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TitleProvider>
          <Navbar />
          <Wall />
        </TitleProvider>
        <TileGeneratorButton />
      </ThemeProvider>
    </StrokeColorProvider>
  );
}

export default App;