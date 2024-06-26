import { AlignJustify } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "./Logo"
import Nav from "./Nav"
import Social from "../Social"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col overflow-y-auto py-10">
          <div className="mb-20 w-full">
            <Logo />
          </div>
          <div className="flex-1">
            <Nav containerStyles="flex flex-col gap-10 px-6" linkStyles="text-2xl" />
          </div>
          <Social mobileNav={true} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
