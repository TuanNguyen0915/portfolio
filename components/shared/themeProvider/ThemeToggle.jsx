"use client"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="w-[1 .5rem] h-[1.5rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 text-primary transition-all duration-300 dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  )
}

export default ThemeToggle
