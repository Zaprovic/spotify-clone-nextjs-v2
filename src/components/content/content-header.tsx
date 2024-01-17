import Link from "next/link";
import ContentHeaderNavigation from "./content-header-navigation";

const ContentHeader = () => {
	return (
		<header className="flex items-center justify-between w-full py-2 px-6 bg-neutral-950">
			<ContentHeaderNavigation />

			<div className="flex gap-8 font-bold">
				<button className="text-neutral-400 hover:scale-105 hover:text-neutral-100 hover:font-extrabold transition-all">
					Sign up
				</button>
				<Link
					href={"/login"}
					className="bg-neutral-100 py-3 px-8 rounded-full text-neutral-950 hover:scale-105 hover:font-extrabold transition-all"
				>
					<button>Log in</button>
				</Link>
			</div>

			{/* <nav className="flex gap-2">
				<Link
					href={"/install"}
					className="flex items-center justify-center gap-2 font-bold text-sm bg-black py-1 px-3 rounded-full hover:scale-105 transition-all"
				>
					<InstallIcon />
					<span className="mb-1">Install App</span>
				</Link>

				<Link
					href={"/notifications"}
					className="bg-black p-2 rounded-full hover:scale-105 transition-all"
				>
					<NotificationsIcon />
				</Link>
			</nav> */}
		</header>
	);
};

export default ContentHeader;
