import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";
import DynamicMinMaxLayout from "@/components/DynamicMinMaxLayout";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <DynamicMinMaxLayout />
    </ThemeProvider>
  );
}

export default App;