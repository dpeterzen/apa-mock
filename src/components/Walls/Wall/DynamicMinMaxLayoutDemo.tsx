import { useCallback, useState, useEffect, useMemo } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";
import { Textarea } from '@/components/ui/textarea';
import scoobydoo from '@/assets/scoobydoo.jpg';
import useStrokeColor from "@/hooks/useStrokeColor";
import TweetTile from "@/components/Walls/Tiles/TweetTile";

const ReactGridLayout = WidthProvider(RGL);

type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";

type DynamicMinMaxLayoutDemoProps = object;

const TileFactory = (type: string, key: string) => {
  switch (type) {
    case "image":
      return (
        <img
          key={key}
          src={scoobydoo}
          alt="Scooby Doo"
          className="flex-grow flex-shrink flex-basis-0 m-0.5 rounded-sm object-contain"
        />
      );
    case "video":
      return (
        <div key={key} className="flex-grow flex-shrink flex-basis-0 m-3 rounded-sm object-contain">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/N3ZGNT5S5IU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    case "tweet":
      return (
        <div key={key} className="flex-grow flex-shrink flex-basis-0 m-3 rounded-sm object-contain">
          <TweetTile className="overflow-y-auto" id="1825961748949860580" />
        </div>
      );
    case "textarea":
    default:
      return (
        <Textarea
          key={key}
          className="flex-grow flex-shrink flex-basis-0 m-3 p-0 min-h-0 rounded-md resize-none"
          defaultValue={key}
        ></Textarea>
      );
  }
};

const DynamicMinMaxLayoutDemo: React.FC<DynamicMinMaxLayoutDemoProps> = () => {
  const items = useMemo(() => [1, 2, 3, 4, 5], []); // Example value, adjust as needed
  const cols = 12; // Example value, adjust as needed
  const isDraggable = true; // Example value, adjust as needed
  const isResizable = true; // Example value, adjust as needed
  const rowHeight = 30; // Example value, adjust as needed

  const [layouts, setLayouts] = useState<Layout[]>([]);

  const generateLayout = useCallback(() => {
    const initialWidth = 2; // Adjust the initial width as needed
    const initialHeight = 3; // Adjust the initial height as needed
  
    return _.map(items, (_, i) => {
      return {
        i: i.toString(),
        x: (i * initialWidth) % cols, // Place divs adjacent to each other
        y: Math.floor((i * initialWidth) / cols) * initialHeight, // Adjust y coordinate based on width
        w: initialWidth,
        h: initialHeight,
        minH: 2,
        maxH: 80,
        resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"] as ResizeHandle[]
      };
    });
  }, [items, cols]);

  useEffect(() => {
    setLayouts(generateLayout());
  }, [generateLayout]);

  const generateDOM = useCallback(() => {
    return _.map(layouts, (l, index) => {
      let type = "textarea"; // Default type
      if (index === layouts.length - 3) type = "image";
      else if (index === layouts.length - 2) type = "video";
      else if (index === layouts.length - 1) type = "tweet";

      return (
        <div className="relative rounded-md flex" key={l.i} data-grid={l}>
          {TileFactory(type, l.i)}
          <Handlebars />
        </div>
      );
    });
  }, [layouts]);

  const handleLayoutChange = useCallback(
    (layout: Layout[]) => {
      console.log("Layout changed:", layout);
    },
    []
  );

  const handleDragStop = (_: Layout[], oldItem: Layout, newItem: Layout) => {
    const maxCols = 12; // Adjust based on your max columns
    const maxRows = 42; // Adjust based on your max rows
    if (newItem.x + newItem.w > maxCols) {
      newItem.x = maxCols - newItem.w;
    }
    if (newItem.y >= maxRows) {
      newItem.y = oldItem.y; // Prevent moving if it exceeds the max row limit
    }
  };

  return (
    <ReactGridLayout
      className=""
      onLayoutChange={handleLayoutChange}
      isDraggable={isDraggable}
      isResizable={isResizable}
      rowHeight={rowHeight}
      cols={cols}
      verticalCompact={false}
      allowOverlap={true}
      onDragStop={handleDragStop}
      useCSSTransforms={true}
      margin={[1, 1]}
    >
      {generateDOM()}
    </ReactGridLayout>
  );
};

export default DynamicMinMaxLayoutDemo;

const TallySVG: React.FC<{ strokeColor: string }> = ({ strokeColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="24"
    viewBox="0 0 12 24"
    fill="none"
    stroke={strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tally-1"
  >
    <path d="M4 4v16" />
  </svg>
);

const Handlebars: React.FC = () => {
  const { strokeColor } = useStrokeColor();

  return (
    <>
      <span className="absolute top-[-15px] left-1/2 -rotate-90 transform -translate-x-1/2">
        <TallySVG strokeColor={strokeColor} />
      </span>
      <span className="absolute right-[-9px] top-1/2 transform -translate-y-1/2">
        <TallySVG strokeColor={strokeColor} />
      </span>
      <span className="absolute bottom-[-15px] left-1/2 rotate-90 transform -translate-x-1/2">
        <TallySVG strokeColor={strokeColor} />
      </span>
      <span className="absolute left-[-9px] top-1/2 rotate-180 transform -translate-y-1/2">
        <TallySVG strokeColor={strokeColor} />
      </span>
    </>
  );
};