import AddIcon from "@/icons/add-icon";
import LibraryIcon from "@/icons/library-icon";
import MoreIcon from "@/icons/more-icon";

const SidebarSection = () => {
    return (
        <section className="flex-1 rounded-lg bg-neutral-900 p-4">
            <div className="mb-4 flex items-center justify-between font-bold text-neutral-400">
                <button className="flex items-center gap-4 transition-all hover:text-neutral-100">
                    <LibraryIcon />
                    <h3>Your library</h3>
                </button>

                <div className="flex gap-2">
                    <button className="rounded-full p-2 transition-all hover:bg-neutral-800">
                        <AddIcon />
                    </button>
                    <button className="rounded-full p-2 transition-all hover:bg-neutral-800">
                        <MoreIcon />
                    </button>
                </div>
            </div>

            <div className="flex gap-2 text-sm">
                <button className="rounded-full bg-neutral-800 px-3 py-1 font-semibold transition-all hover:opacity-80">
                    Playlists
                </button>
                <button className="rounded-full bg-neutral-800 px-3 py-1 font-semibold transition-all hover:opacity-80">
                    Artists
                </button>
            </div>
        </section>
    );
};

export default SidebarSection;
