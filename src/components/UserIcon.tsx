import Dropmenu from "./dropmenu";
import { CircleUser } from "lucide-react";
import { DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import Link from "next/link";

const UserIcon = () => {
  return (
    <div>
      <Dropmenu
        trigger={<CircleUser className="text-blue-600 cursor-pointer" />}
      >
        <Link href="/sign-in" aria-label="User account">
          <DropdownMenuItem className="cursor-pointer">
            Sign In
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href="/sign-up" aria-label="User account">
          <DropdownMenuItem className="cursor-pointer">
            Sign Up
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Admin</DropdownMenuItem>
      </Dropmenu>
    </div>
  );
};

export default UserIcon;
