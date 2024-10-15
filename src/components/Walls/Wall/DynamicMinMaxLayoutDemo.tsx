import { useCallback, useState, useEffect, useMemo } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";
import { Textarea } from '@/components/ui/textarea';
import scoobydoo from '@/assets/scoobydoo.jpg';
import useStrokeColor from "@/hooks/useStrokeColor";
import TweetTile from "@/components/Walls/Tiles/TweetTile";
import { Switch } from "@/components/ui/switch"; 

const ReactGridLayout = WidthProvider(RGL);

type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";

type DynamicMinMaxLayoutDemoProps = object;

const TileFactory = (type: string, key: string, tileIsLocked: boolean, isClickDisabled: boolean) => {
  const handleClick = (e: React.MouseEvent) => {
    if (tileIsLocked) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
<div className="relative flex h-full w-full">
  {isClickDisabled && (
    <div className="absolute inset-0 z-10 bg-transparent cursor-move"></div>
  )}
  {(() => {
    switch (type) {
      case "image":
        return (
          <img
            key={key}
            src={scoobydoo}
            alt="Scooby Doo"
            className="flex-grow flex-shrink flex-basis-0 m-0.5 rounded-sm object-contain h-full w-full"
            onClick={handleClick}
          />
        );
      case "video":
        return (
          <div key={key} className="flex-grow flex-shrink flex-basis-0 m-3 rounded-sm object-contain h-full w-full" onClick={handleClick}>
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
          <div key={key} className="flex-grow flex-shrink flex-basis-0 m-3 rounded-sm object-contain h-full w-full" onClick={handleClick}>
            <TweetTile className="overflow-y-auto h-full w-full" id="1825961748949860580" />
          </div>
        );
      case "textarea":
      default:
        return (
          <Textarea
            key={key}
            className="flex-grow flex-shrink flex-basis-0 m-3 p-0 min-h-0 rounded-md resize-none h-full w-full"
            defaultValue={key}
            onClick={handleClick}
          ></Textarea>
        );
    }
  })()}
</div>
  );
};

const DynamicMinMaxLayoutDemo: React.FC<DynamicMinMaxLayoutDemoProps> = () => {
  const items = useMemo(() => [1, 2, 3, 4, 5], []); // Example value, adjust as needed
  const cols = 12; // Example value, adjust as needed
  const rowHeight = 30; // Example value, adjust as needed

  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [tileIsLocked, setTileIsLocked] = useState(false); // State to control the mode
  const [isClickDisabled, setIsClickDisabled] = useState(false); // State to control click events

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
          {TileFactory(type, l.i, tileIsLocked, isClickDisabled)}
          <Handlebars />
        </div>
      );
    });
  }, [layouts, tileIsLocked, isClickDisabled]);

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
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-[1001] flex space-x-4">
        <div>
          <Switch
            checked={tileIsLocked}
            onCheckedChange={() => setTileIsLocked(!tileIsLocked)}
            className="bg-red-500 text-white p-2 m-2 rounded"
          />
          <label className="ml-2 text-white">Lock Tiles</label>
        </div>
        <div>
          <Switch
            checked={isClickDisabled}
            onCheckedChange={() => setIsClickDisabled(!isClickDisabled)}
            className="bg-red-500 text-white p-2 m-2 rounded"
          />
          <label className="ml-2 text-white">Disable Click Events</label>
        </div>
      </div>
      <ReactGridLayout
        className=""
        onLayoutChange={handleLayoutChange}
        isDraggable={!tileIsLocked}
        isResizable={!tileIsLocked}
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
    </>
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