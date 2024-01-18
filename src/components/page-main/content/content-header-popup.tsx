"use client";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import More from "@/icons/more";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";

const ContentHeaderPopup = ({ children }: { children?: ReactNode }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="mr-7 mt-1 w-48 rounded-sm border-none bg-neutral-800 p-[0.25rem]">
                <ul className="flex flex-col gap-1 text-sm">
                    <li className="h-full w-full rounded-sm p-2.5 transition-all hover:bg-neutral-500">
                        <Link href={"#"} className="flex justify-between">
                            <span>Account</span>
                            <More />
                        </Link>
                    </li>
                    <li className="h-full w-full rounded-sm p-2.5 transition-all hover:bg-neutral-500">
                        <Link href={"#"}>Profile</Link>
                    </li>
                    <li className="h-full w-full rounded-sm p-2.5 transition-all hover:bg-neutral-500">
                        <Link href={"#"}>Settings</Link>
                    </li>
                    <hr className="border-neutral-700" />
                    <li className="h-full w-full rounded-sm p-2.5 transition-all hover:bg-neutral-500">
                        <Link href={"#"}>
                            <button onClick={() => signOut()}>Log out</button>
                        </Link>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
};

export default ContentHeaderPopup;
