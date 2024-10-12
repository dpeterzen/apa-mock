import { useCallback } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { Textarea } from '@/components/ui/textarea';
import scoobydoo from '../assets/scoobydoo.jpg';

const ReactGridLayout = WidthProvider(RGL);

const DynamicMinMaxLayout = ({ items, cols, isDraggable, isResizable, rowHeight, onLayoutChange }) => {
  const generateLayout = useCallback(() => {
    return _.map(new Array(items), (item, i) => {
      return {
        i: i.toString(),
        x: (i + 1) % cols, // Start x coordinate in the second position
        y: Math.floor((i + 1) / cols),
        w: 1,
        h: 2,
        minH: 2,
        resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"]
      };
    });
  }, [items, cols]);

  const generateDOM = useCallback(() => {
    const layout = generateLayout();
    return _.map(layout, (l, index) => {
      return (
        <div className="relative rounded-md border-2" key={l.i} data-grid={l}>
          {index === layout.length - 1 ? (
            <img src={scoobydoo} alt="Scooby Doo" className="rounded-[4px] w-full h-full object-cover" />
          ) : (
            <Textarea className="p-0 min-h-0 rounded-md w-full h-full resize-none" defaultValue={l.i}></Textarea>
            )}
            <span className="absolute top-[-15px] left-1/2 -rotate-90 transform -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-1"><path d="M4 4v16" /></svg>
            </span>
            <span className="absolute right-[-9px] top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-1"><path d="M4 4v16" /></svg>
            </span>
            <span className="absolute bottom-[-15px] left-1/2 rotate-90 transform -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-1"><path d="M4 4v16" /></svg>
            </span>
            <span className="absolute left-[-9px] top-1/2 rotate-180 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-1"><path d="M4 4v16" /></svg>
            </span>

        </div>
      );
    });
  }, [generateLayout]);

  const handleLayoutChange = useCallback(
    (layout) => {
      onLayoutChange(layout);
    },
    [onLayoutChange]
  );

  // const handleResize = useCallback((layout, oldLayoutItem, layoutItem, placeholder) => {
  //   if (layoutItem.h < 3 && layoutItem.w > 2) {
  //     layoutItem.w = 2;
  //     placeholder.w = 2;
  //   }

  //   if (layoutItem.h >= 3 && layoutItem.w < 2) {
  //     layoutItem.w = 2;
  //     placeholder.w = 2;
  //   }
  // }, []);

  const handleDragStop = (layout: Layout[], oldItem: Layout, newItem: Layout) => {
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
      className="border-b px-1"
      onLayoutChange={handleLayoutChange}
      // onResize={handleResize}
      isDraggable={isDraggable}
      isResizable={isResizable}
      rowHeight={rowHeight}
      cols={cols}
      verticalCompact={false}
      allowOverlap={true}
      onDragStop={handleDragStop}
    >
      {generateDOM()}
    </ReactGridLayout>
  );
};

export default DynamicMinMaxLayout;