"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";
import UserIcon from "../UserIcon";
import Navigation from "../Navigation";

const SideMenu = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Drawer direction="left" open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex justify-between items-center gap-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/B_Laban.jpeg"
                width={30}
                height={30}
                alt="Logo"
                priority
              />
              <DrawerTitle>B.Laban</DrawerTitle>
            </div>
            <UserIcon />
            <DrawerClose className=" text-2xl cursor-pointer  ">x</DrawerClose>
          </div>
        </DrawerHeader>
        <Navigation onLinkClick={() => onOpenChange(false)} />
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;
