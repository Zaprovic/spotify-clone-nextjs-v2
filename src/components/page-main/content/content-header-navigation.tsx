"use client";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import { useRouter } from "next/navigation";

const ContentHeaderNavigation = () => {
	const router = useRouter();
	return (
		<div className="flex gap-2 items-center">
			<button
				onClick={() => router.back()}
				className="bg-black p-2 rounded-full"
			>
				<ChevronLeft />
			</button>
			<button
				onClick={() => router.forward()}
				className="bg-black p-2 rounded-full"
			>
				<ChevronRight />
			</button>
		</div>
	);
};

export default ContentHeaderNavigation;
