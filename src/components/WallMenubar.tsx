import React, { useState, useRef, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Pencil, Check } from "lucide-react"; // Assuming you have lucide-react installed
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const wallNames = [
  "Test Wall Name: This Name is Long and Should be read in it's entirety",
  "Pokemon Collection: A long and arduous disection of pokemon history especially the atrocities commited by Ash.",
  "Short Titles FTW",
];

export default function WallMenubar() {
  const [selectedWall, setSelectedWall] = useState(wallNames[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [newWallName, setNewWallName] = useState(selectedWall);
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setSelectedWall(newWallName);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing && inputRef.current && spanRef.current) {
      spanRef.current.textContent = newWallName;
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 90}px`; // Adding 10px padding
    }
  }, [newWallName, isEditing]);
  
  return (
    <Menubar>
      <MenubarMenu>
        <div className="flex items-center">
          {isEditing ? (
            <>
              <input
                ref={inputRef}
                type="text"
                value={newWallName}
                onChange={(e) => setNewWallName(e.target.value)}
                className="border p-2 rounded bg-inherit text-lg"
              />
              <Button variant="outline" size="icon" onClick={handleSave}>
                <Check className="h-4 w-4" />
              </Button>
              <span
                ref={spanRef}
                className="absolute invisible whitespace-nowrap"
              />
            </>
          ) : (
            <MenubarTrigger>{selectedWall}</MenubarTrigger>
          )}
          <Button variant="outline" size="icon" onClick={handleEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
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