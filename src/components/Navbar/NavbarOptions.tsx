import { useTheme } from "@/components/theme-provider";
import {
  LogOut,
  Plus,
  User,
  Users,
  EllipsisVertical,
  Search,
  Sun,
  Moon
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NavbarOptions() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-0 h-8 w-8" variant="outline" size="icon">
          <EllipsisVertical className="h-6 w-6" />
          <span className="sr-only">Navbar Options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-1">
        <DropdownMenuItem>
          <Search className="mr-2 h-4 w-4" />
          <span>Search</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Switch Walls</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Wall</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span>Theme</span>
            <Switch
              className="ml-auto"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              onClick={(event) => event.stopPropagation()}
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
