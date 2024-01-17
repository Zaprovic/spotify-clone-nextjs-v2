import InstallIcon from "@/icons/install-icon";
import NotificationsIcon from "@/icons/notifications-icon";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ContentHeaderNavigation from "./content-header-navigation";

// todo: handle better when image is undefined

const ContentHeader = () => {
	const { data: session } = useSession();
	return (
		<header
			className={`flex items-center justify-between w-full ${
				!session ? "py-2" : "py-4"
			} pl-6 pr-4 bg-neutral-950`}
		>
			<ContentHeaderNavigation />

			{session && session.user?.image ? (
				<nav className="flex gap-2">
					<Link
						href={"/install"}
						className="flex items-center justify-center gap-2 font-bold text-sm bg-neutral-900 py-1 px-3 rounded-full hover:scale-105 transition-all"
					>
						<InstallIcon />
						<span>Install App</span>
					</Link>

					<Link
						href={"/notifications"}
						className="bg-neutral-900 p-2 rounded-full hover:scale-105 transition-all"
					>
						<NotificationsIcon />
					</Link>

					<button>
						<figure className="bg-neutral-900 hover:bg-black hover:scale-105 transition-all p-1 rounded-full">
							<Image
								src={session.user?.image}
								alt="Profile picture"
								width={24}
								height={24}
								className="object-cover rounded-full"
							/>
						</figure>
					</button>
				</nav>
			) : (
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
			)}
		</header>
	);
};

export default ContentHeader;
