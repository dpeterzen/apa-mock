import React, { useState, useEffect, useCallback } from "react";
import { WidthProvider, Layout, Responsive } from "react-grid-layout";
import { Textarea } from '@/components/ui/textarea';
import scoobydoo from '@/assets/scoobydoo.jpg';
import useStrokeColor from "@/hooks/useStrokeColor";
import TweetTile from "@/components/Walls/Tiles/TweetTile";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface ResponsiveWallLayoutDemoProps {
  items: number[];
  rowHeight: number;
  onLayoutChange: (layout: Layout[]) => void;
}

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

const ResponsiveWallLayoutDemo: React.FC<ResponsiveWallLayoutDemoProps> = ({
  items = [1, 2, 3, 4, 5],
  rowHeight = 35,
  onLayoutChange = () => {}
}) => {
  const [layouts, setLayouts] = useState<{ [key: string]: Layout[] }>({});

  const generateLayouts = useCallback(() => {
    const times = [...Array(items.length)];
    const widths: { [key in 'lg' | 'md' | 'sm' | 'xs' | 'xxs']: number } = { lg: 3, md: 4, sm: 6, xs: 12, xxs: 12 };
    return Object.keys(widths).reduce((memo, breakpoint) => {
      const width = widths[breakpoint as 'lg' | 'md' | 'sm' | 'xs' | 'xxs'];
      const cols = { lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 }[breakpoint as 'lg' | 'md' | 'sm' | 'xs' | 'xxs'];
      memo[breakpoint] = [
        ...times.map((_, i) => ({
          x: (i * width) % cols,
          y: 0,
          w: width,
          h: 4,
          i: String(i),
          resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"] as ResizeHandle[]
        }))
      ];
      return memo;
    }, {} as { [key: string]: Layout[] });
  }, [items.length]);

  useEffect(() => {
    setLayouts(generateLayouts());
  }, [generateLayouts]);

  const generateDOM = () => {
    if (!layouts.lg) return null; // Ensure layouts.lg is defined
    return items.map((item, index) => (
      <div className="relative rounded-[2px] flex  h-auto w-auto" key={item.toString()} data-grid={layouts.lg[index]}>
        {index === items.length - 3 ? (
          <img src={scoobydoo} alt="Scooby Doo" className="flex-grow flex-shrink flex-basis-0 m-0.5 rounded-sm object-contain" />
        ) : index === items.length - 2 ? (
          <div className="flex-grow flex-shrink flex-basis-0 m-3 rounded-sm object-contain">
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
        ) : index === items.length - 1 ? (
          <div className="flex-grow flex-shrink flex-basis-0 m-3 rounded-sm object-contain min-h-[170px] min-w-[270px]">
            <TweetTile className="overflow-y-auto" id="1825961748949860580" />
          </div>
        ) : (
          <Textarea className="flex-grow flex-shrink flex-basis-0 m-3 p-0 min-h-0 rounded-md resize-none" defaultValue={item.toString()}></Textarea>
        )}
        <Handlebars />
      </div>
    ));
  };

  const handleLayoutChange = (layout: Layout[]) => {
    onLayoutChange(layout);
  };

  return (
    <ResponsiveReactGridLayout
      layouts={layouts}
      onLayoutChange={handleLayoutChange}
      cols={{ lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 }}
      rowHeight={rowHeight}
      autoSize={true}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      measureBeforeMount={false}
      useCSSTransforms={true}
      compactType="vertical"
      preventCollision={false}
    >
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};

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

export default ResponsiveWallLayoutDemo;