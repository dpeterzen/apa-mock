import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const wallNames = [
  {
    value: "1",
    label: "Test Wall Name: This Name is Long and Should be read in it's entirety",
  },
  {
    value: "2",
    label: "Pokemon Collection: A long and arduous disection of pokemon history especially the atrocities commited by Ash.",
  },
  {
    value: "3",
    label: "Short Titles FTW",
  },
]
 
export default function WallSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(wallNames[0]?.value || "")
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] lg:w-[400px] justify-between"
        >
          {value
            ? wallNames.find((wall) => wall.value === value)?.label
            : "Select wall..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] lg:w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search wall..." />
          <CommandList className="">
            <CommandEmpty>No wall found.</CommandEmpty>
            <CommandGroup>
              {wallNames.map((wall) => (
                <CommandItem
                  key={wall.value}
                  value={wall.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === wall.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {wall.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}