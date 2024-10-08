import React, { useState, useRef, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Pencil } from "lucide-react"; // Assuming you have lucide-react installed
import { Toggle } from "@/components/ui/toggle"; // Assuming you have a Toggle component
import "./WallMenubar.css";

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

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    setSelectedWall(newWallName);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current && spanRef.current) {
      spanRef.current.textContent = newWallName;
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 80}px`; // Adding 10px padding
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
                onKeyDown={handleKeyDown}
                className="border p-1 rounded bg-inherit text-lg"
              />
              <span
                ref={spanRef}
                className="absolute invisible whitespace-nowrap"
              />
            </>
          ) : (
            <MenubarTrigger><span className="menubar-trigger">{selectedWall}</span></MenubarTrigger>
          )}
          <Toggle
            className="rounded-full pencil-toggler"
            pressed={isEditing}
            onPressedChange={handleEditToggle}
          >
            <Pencil className="h-4 w-4" />
          </Toggle>
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