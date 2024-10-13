# Playground front end for apa project

## TODO
- [x] add resize to all sides
- [ ] cache responsive behavior
- [ ] title nav component - container flex fill inner space - 
- [ ] right click, ctrl zoom, green button, auto hide nav title
- [ ] move grid styles out of app.css

consideration: RGL overlap doesn't let you control z index. Quick fix- overlap=false 
OR
can you dynamically assign z index based on last click?

- add circular vertical ellipse to top right of demo tile cards
- add left and right arrow buttons for switch wall inside menu
- add dialog to New wall button (WARNING dialog added to plus wall button cause ref error)
- add sidebar 
- consider absolute positioning nav elements 

- 1 starts small to big, 2  big to small
```1
<LayoutDashboard className="w-12 h-12 rotate-90" />
<LayoutDashboard className="w-6 h-6 rotate-90" />

or 2
<LayoutDashboard className="w-12 h-12" />
<LayoutDashboard className="w-6 h-6" />
```