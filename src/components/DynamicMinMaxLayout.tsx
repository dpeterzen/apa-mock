import React, { useCallback } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import scoobydoo from '../assets/scoobydoo.jpg';

const ReactGridLayout = WidthProvider(RGL);

const DynamicMinMaxLayout = ({
  isDraggable = true,
  isResizable = true,
  items = 4,
  rowHeight = 30,
  onLayoutChange = () => { },
  cols = 12,
}) => {
  const generateLayout = useCallback(() => {
    return _.map(new Array(items), (item, i) => {
      return {
        i: i.toString(),
        x: i % cols,
        y: Math.floor(i / cols),
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
      if (index === layout.length - 1) {
        return (
          <div className="bg-stone-900 rounded border-2 p-1.5" key={l.i} data-grid={l}>
            <img src={scoobydoo} alt="Scooby Doo" className="w-full h-full object-contain" />
          </div>
        );
      } else {
        return (
          <div className="bg-stone-900 rounded border-2 p-1.5" key={l.i} data-grid={l}>
            <textarea className="w-full h-full resize-none" defaultValue={l.i}></textarea>
          </div>
        );
      }
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
      className="border"
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