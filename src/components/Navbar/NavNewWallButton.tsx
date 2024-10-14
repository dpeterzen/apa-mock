import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const NavNewWallButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleCreateWall = () => {
    console.log("New wall created");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border-0 h-8 w-8" variant="outline" size="icon">
          <Plus className="h-6 w-6" />
          <span className="sr-only">Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Wall</DialogTitle>
          <DialogDescription>
            Enter the details for the new wall.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateWall}>
          <div className="mb-4">
            <label htmlFor="wallName" className="block text-sm font-medium text-gray-700">
              Wall Name
            </label>
            <input
              type="text"
              id="wallName"
              name="wallName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NavNewWallButton;