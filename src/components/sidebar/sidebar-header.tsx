import HomeIcon from "@/icons/home-icon";
import SearchIcon from "@/icons/search-icon";
import Link from "next/link";

const SidebarHeader = () => {
	return (
		<header className="sidebar-header font-bold text-neutral-400 bg-neutral-900 p-6 rounded-lg flex flex-col gap-6">
			<Link
				href={"/"}
				className="flex gap-6 items-center hover:text-neutral-100 transition-all"
			>
				<HomeIcon />
				<h3 className="">Home</h3>
			</Link>
			<Link
				href={"/search"}
				className="flex gap-6 items-center hover:text-neutral-100 transition-all"
			>
				<SearchIcon />
				<h3 className="">Search</h3>
			</Link>
		</header>
	);
};

export default SidebarHeader;
