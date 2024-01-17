"use client";
import ChevronLeft from "@/icons/chevron-left";
import { useRouter } from "next/navigation";

const Backward = () => {
	const router = useRouter();
	return (
		<button onClick={() => router.back()} className="bg-black p-2 rounded-full">
			<ChevronLeft />
		</button>
	);
};

export default Backward;
