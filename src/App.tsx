import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
        <div className="flex items-center flex-1 mx-16">
        <Carousel className="flex-1">
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4">Test Wall Name: This Name is Long and Should be read in it's entirety</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">Pokemon Collection: A long and arduous disection of pokemon history and stuff</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">Pokemon Collection: A long and arduous disection of pokemon history and stuff</CarouselItem>
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        </div>

        {/* Right Section: Plus Button and Mode Toggle */}
        <div className="flex items-center">
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </Button>
        </div>
      </nav>
      <section className="p-4">
      <ModeToggle />
      </section>

    </ThemeProvider>
  );
}

export default App;