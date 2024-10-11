import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";
import DynamicMinMaxLayout from "@/components/DynamicMinMaxLayout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  // const layouts = {
  //   lg: [
  //     { i: "a", x: 0, y: 0, w: 1, h: 2, minH: 2, resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"] },
  //     { i: "b", x: 1, y: 0, w: 1, h: 2, minH: 2, resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"] },
  //     { i: "c", x: 4, y: 0, w: 1, h: 2, minH: 2, resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"] }
  //   ],

  // };

  // const handleDragStop = (layout: Layout[], oldItem: Layout, newItem: Layout) => {
  //   const maxCols = 12; // Adjust based on your max columns
  //   const maxRows = 22; // Adjust based on your max rows
  //   if (newItem.x + newItem.w > maxCols) {
  //     newItem.x = maxCols - newItem.w;
  //   }
  //   if (newItem.y >= maxRows) {
  //     newItem.y = oldItem.y; // Prevent moving if it exceeds the max row limit
  //   }
  // };

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
          {/* New nav component - container flex fill inner space */}
        </div>
        {/* Right Section: Plus Button and Mode Toggle */}
        <div className="flex items-center">
          <Button variant="outline" size="icon">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add</span>
          </Button>
          <ModeToggle />
        </div>
      </nav>
      {/* <ResponsiveGridLayout
        className="layout border"
        layouts={layouts}
        // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        rowHeight={30}
        verticalCompact={false}
        allowOverlap={true}
        onDragStop={handleDragStop}
      >
        <div className="bg-stone-900 rounded border-2 p-1.5" key="a">
          <textarea className="w-full h-full resize-none">a</textarea>
        </div>
        <div className="bg-stone-900 rounded border-2 p-1.5" key="b">
          <textarea className="w-full h-full resize-none">b</textarea>
        </div>
        <div className="bg-stone-900 rounded border-2 p-1.5" key="c">
          <textarea className="w-full h-full resize-none">c</textarea>
        </div>
      </ResponsiveGridLayout> */}
      <DynamicMinMaxLayout />
    </ThemeProvider>
  );
}

export default App;