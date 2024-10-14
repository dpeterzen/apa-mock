import { useCallback } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";
import { Textarea } from '@/components/ui/textarea';
import scoobydoo from '@/assets/scoobydoo.jpg';
import useStrokeColor from "@/hooks/useStrokeColor";


const ReactGridLayout = WidthProvider(RGL);

interface DynamicMinMaxLayoutDemoProps {
  items: number[]; // Adjust the type as needed
  cols: number;
  isDraggable: boolean;
  isResizable: boolean;
  rowHeight: number;
  onLayoutChange: (layout: Layout[]) => void;
  useCSSTransforms: boolean;
}

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

const DynamicMinMaxLayoutDemo: React.FC<DynamicMinMaxLayoutDemoProps> = ({
  items,
  cols,
  isDraggable,
  isResizable,
  rowHeight,
  onLayoutChange,
  useCSSTransforms
}) => {
  const { strokeColor } = useStrokeColor();

  const generateLayout = useCallback(() => {
    return _.map(items, (item, i) => {
      return {
        i: i.toString(),
        x: (i + 1) % cols, // Start x coordinate in the second position
        y: Math.floor((i + 1) / cols),
        w: 1,
        h: 2,
        minH: 2,
        maxH: 80,
        resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"]
      };
    });
  }, [items, cols]);

  const generateDOM = useCallback(() => {
    const layout = generateLayout();
    return _.map(layout, (l, index) => {
      return (
        <div className="relative rounded-[2px] flex" key={l.i} data-grid={l}>
          {index === layout.length - 1 ? (
            <img src={scoobydoo} alt="Scooby Doo" className="flex-grow flex-shrink flex-basis-0 m-0.5 rounded-sm object-contain " />
          ) : (
            <Textarea className="flex-grow flex-shrink flex-basis-0 m-0.5 p-0 min-h-0 rounded-md resize-none" defaultValue={l.i}></Textarea>
          )}
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
        </div>
      );
    });
  }, [generateLayout, strokeColor]);

  const handleLayoutChange = useCallback(
    (layout: Layout[]) => {
      onLayoutChange(layout);
    },
    [onLayoutChange]
  );

  const handleDragStop = (_: Layout[], oldItem: Layout, newItem: Layout) => {
    const maxCols = 24; // Adjust based on your max columns
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
      useCSSTransforms={useCSSTransforms}
      margin={[1, 1]}
    >
      {generateDOM()}
    </ReactGridLayout>
  );
};

export default DynamicMinMaxLayoutDemo;