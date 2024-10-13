import { useState } from "react";
import { Input } from "@/components/ui/input";

const WallTitle = () => {
  const [title, setTitle] = useState("apa.io");
  const [tempTitle, setTempTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTitle(tempTitle.trim());
      setIsEditing(false);
      setIsHovered(false); // Reset hover state
    } else if (e.key === "Escape") {
      setTempTitle(title);
      setIsEditing(false);
      setIsHovered(false); // Reset hover state
    }
  };

  const handleBlur = () => {
    setTitle(tempTitle.trim());
    setIsEditing(false);
    setIsHovered(false); // Reset hover state
  };

  return (
    <div className="flex justify-center my-2 mx-[55px]">
      {isEditing ? (
        <Input
          type="text"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="text-zinc-300 w-full max-w-[810px] flex-grow h-[45px] p-1 text-[26px] leading-[35px] font-bold focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-zinc-700"
        />
      ) : (
        <h1
          className={`text-zinc-600 w-full max-w-[810px] flex-grow h-[45px] p-1 border rounded-md text-[26px] leading-[35px] font-bold cursor-default ${
            isHovered ? "border-zinc-900" : "border-zinc-50 dark:border-zinc-950"
          }`}
        >
          <span
            onClick={() => {
              setTempTitle(title);
              setIsEditing(true);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="pointer-events-auto cursor-text"
          >
            {title}
          </span>
        </h1>
      )}
    </div>
  );
};

export default WallTitle;