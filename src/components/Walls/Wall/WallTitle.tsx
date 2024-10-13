import { useState } from "react";
import { Input } from "@/components/ui/input";

const WallTitle = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="flex justify-center mt-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter wall title..."
        className="w-full max-w-[810px] flex-grow p-2 border rounded-md"
      />
    </div>
  );
};

export default WallTitle;