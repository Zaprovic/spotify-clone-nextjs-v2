// todo : change width later, the 360px are temporal

import SidebarHeader from "./sidebar-header";
import SidebarSection from "./sidebar-section";

const Sidebar = () => {
	return (
		<aside className="flex flex-col gap-2 h-full mr-2">
			<SidebarHeader />
			<SidebarSection />
		</aside>
	);
};

export default Sidebar;
