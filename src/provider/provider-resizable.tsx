"use client";

import ContentHeader from "@/components/page-main/content/content-header";
import Sidebar from "@/components/page-main/sidebar/sidebar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ReactNode } from "react";

const ProviderResizable = ({ children }: { children: ReactNode }) => {
    return (
        <ResizablePanelGroup direction="horizontal" className="flex flex-1">
            <ResizablePanel defaultSize={25}>
                <Sidebar />
            </ResizablePanel>
            <ResizableHandle withHandle className="w-0 bg-black" />
            <ResizablePanel
                defaultSize={75}
                className="flex flex-col overflow-hidden rounded-lg"
            >
                <ContentHeader />
                <main className="flex-1 bg-cyan-900">{children}</main>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default ProviderResizable;
