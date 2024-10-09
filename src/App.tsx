import GridLayout from "react-grid-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
// import WallMenubar from "./components/WallMenubar";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];

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
        {/* New nav component here @workspace help me create a new component for my nav. I want the container to fill the  */}
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
      <GridLayout
        className="layout border"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div className="border" key="a">a</div>
        <div className="border" key="b">b</div>
        <div className="border" key="c">c</div>
      </GridLayout>
    </ThemeProvider>
  );
}

export default App;