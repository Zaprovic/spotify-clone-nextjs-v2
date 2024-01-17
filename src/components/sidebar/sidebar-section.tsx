import AddIcon from "@/icons/add-icon";
import LibraryIcon from "@/icons/library-icon";
import MoreIcon from "@/icons/more-icon";

const SidebarSection = () => {
	return (
		<section className="bg-neutral-900 p-4 rounded-lg flex-1">
			<div className="flex justify-between items-center text-neutral-400 font-bold mb-4">
				<button className="flex gap-4 hover:text-neutral-100 transition-all">
					<LibraryIcon />
					<h3>Your library</h3>
				</button>

				<div className="flex gap-2">
					<button className="hover:bg-neutral-800 p-2 rounded-full transition-all">
						<AddIcon />
					</button>
					<button className="hover:bg-neutral-800 p-2 rounded-full transition-all">
						<MoreIcon />
					</button>
				</div>
			</div>

			<div className="flex gap-2 text-sm">
				<button className="font-semibold py-1 px-3 rounded-full bg-neutral-800 hover:opacity-80 transition-all">
					Playlists
				</button>
				<button className="font-semibold py-1 px-3 rounded-full bg-neutral-800 hover:opacity-80 transition-all">
					Artists
				</button>
			</div>
		</section>
	);
};

export default SidebarSection;
