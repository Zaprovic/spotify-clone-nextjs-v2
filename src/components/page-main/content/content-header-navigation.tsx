"use client";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import { useRouter } from "next/navigation";

const ContentHeaderNavigation = () => {
    const router = useRouter();
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => router.back()}
                className="rounded-full bg-black p-2"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={() => router.forward()}
                className="rounded-full bg-black p-2"
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default ContentHeaderNavigation;
