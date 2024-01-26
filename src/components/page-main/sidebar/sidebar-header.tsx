import HomeIcon from "@/icons/home-icon";
import SearchIcon from "@/icons/search-icon";
import Link from "next/link";

const SidebarHeader = () => {
    return (
        <header className="sidebar-header flex flex-col gap-6 rounded-lg bg-neutral-900 p-6 font-bold text-neutral-400">
            <Link
                href={"/"}
                className="flex items-center gap-6 transition-all hover:text-neutral-100"
            >
                <HomeIcon />
                <h3 className="">Home</h3>
            </Link>
            <Link
                href={"/search"}
                className="flex items-center gap-6 transition-all hover:text-neutral-100"
            >
                <SearchIcon />
                <h3 className="">Search</h3>
            </Link>
        </header>
    );
};

export default SidebarHeader;
