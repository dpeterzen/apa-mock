import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import WallMenubar from "./components/WallMenubar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav className="flex items-center justify-between p-4">
        {/* Left Section: Hamburger Button */}
        <button className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Center Section: Carousel */}
        <div className="flex-1 flex justify-start">
        <WallMenubar />
        </div>

        {/* Right Section: Plus Button and Mode Toggle */}
        <div className="flex items-center">
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </Button>
          <ModeToggle />
      </div>
      </nav>

    </ThemeProvider>
  );
}

export default App;