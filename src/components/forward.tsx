"use client";

import ChevronRight from "@/icons/chevron-right";
import { useRouter } from "next/router";

const Forward = () => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.forward()}
			className="bg-black p-2 rounded-full"
		>
			<ChevronRight />
		</button>
	);
};

export default Forward;
