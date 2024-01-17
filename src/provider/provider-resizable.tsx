"use client";

import ContentHeader from "@/components/content/content-header";
import Sidebar from "@/components/sidebar/sidebar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ReactNode } from "react";

const ProviderResizable = ({ children }: { children: ReactNode }) => {
	return (
		<ResizablePanelGroup direction="horizontal" className="flex flex-1 ">
			<ResizablePanel defaultSize={25}>
				<Sidebar />
			</ResizablePanel>
			<ResizableHandle withHandle className="w-2 bg-black" />
			<ResizablePanel
				defaultSize={75}
				className="bg-neutral-900 rounded-lg overflow-hidden"
			>
				<ContentHeader />
				<main>{children}</main>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default ProviderResizable;
