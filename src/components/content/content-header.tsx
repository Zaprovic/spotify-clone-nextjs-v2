import InstallIcon from "@/icons/install-icon";
import NotificationsIcon from "@/icons/notifications-icon";
import Link from "next/link";
import ContentHeaderNavigation from "./content-header-navigation";

const ContentHeader = () => {
	return (
		<header className="flex items-center justify-between w-full py-4 px-6 bg-neutral-950">
			<ContentHeaderNavigation />
			<nav className="flex gap-2">
				<Link
					href={"/install"}
					className="flex items-center gap-2 font-bold text-sm bg-black py-1 px-3 rounded-full hover:scale-105 transition-all"
				>
					<InstallIcon />
					<span>Install App</span>
				</Link>

				<Link
					href={"/notifications"}
					className="bg-black p-2 rounded-full hover:scale-105 transition-all"
				>
					<NotificationsIcon />
				</Link>
			</nav>
		</header>
	);
};

export default ContentHeader;
