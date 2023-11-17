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



const Navbar = () => {
  return (
    <NavigationMenu>
    <NavigationMenuItem className='list-none'>
   
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
   
  </NavigationMenuItem>
  </NavigationMenu>
  )
}

export default Navbar