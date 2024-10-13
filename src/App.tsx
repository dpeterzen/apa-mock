import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import TileGeneratorButton from "@/components/TileGenerator/TileGeneratorButton";
import Wall from "@/components/Walls/Wall/Wall";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Wall />
        <TileGeneratorButton />
    </ThemeProvider>
  );
}

export default App;