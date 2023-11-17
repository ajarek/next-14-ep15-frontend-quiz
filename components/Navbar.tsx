'use client'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from './ui/toggle-mode'


const Navbar = () => {
  return (
    <NavigationMenu>
    <NavigationMenuItem className='list-none'>
   
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <ModeToggle />
      </NavigationMenuLink>
   
  </NavigationMenuItem>
  </NavigationMenu>
  )
}

export default Navbar