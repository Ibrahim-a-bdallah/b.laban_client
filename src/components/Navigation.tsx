"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Navigation = () => {
  return (
    <NavigationMenu viewport={false} className="flex-[0]">
      <NavigationMenuList className="flex-col md:flex-row">
        {[
          { href: "/", title: "Home" },
          { href: "/shop", title: "Shop" },
          { href: "/about", title: "About" },
          { href: "/contact", title: "Contact" },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const LinkItem = forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
        prefetch={false}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </Link>
    </NavigationMenuLink>
  );
});
LinkItem.displayName = "LinkItem";

export default Navigation;
