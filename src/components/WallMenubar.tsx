import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const wallNames = [
  "Test Wall Name: This Name is Long and Should be read in it's entirety",
  "Pokemon Collection: A long and arduous disection of pokemon history especially the atrocities commited by Ash.",
  "Short Titles FTW",
];

export default function WallMenubar() {
  const [selectedWall, setSelectedWall] = useState(wallNames[0]);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{selectedWall}</MenubarTrigger>
        <MenubarContent>
          {wallNames.map((wallName, index) => (
            <MenubarItem key={index} onClick={() => setSelectedWall(wallName)}>
              {wallName}
            </MenubarItem>
          ))}

        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}