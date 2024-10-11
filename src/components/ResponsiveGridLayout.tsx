const ResponsiveGridLayout = WidthProvider(Responsive);

<ResponsiveGridLayout
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
</ResponsiveGridLayout> 