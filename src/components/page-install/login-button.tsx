"use client";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";

const LoginButton = ({
	children,
	name,
}: {
	children?: ReactNode;
	name: string;
}) => {
	return (
		<button
			onClick={() =>
				signIn("google", {
					callbackUrl: "/",
				})
			}
			className="flex gap-2 border border-neutral-400 hover:border-neutral-100 pl-8 py-3 items-center px-5 rounded-full"
		>
			{children}
			<h5 className="flex-1 w-full text-center font-bold">
				Continue with {name}
			</h5>
		</button>
	);
};

export default LoginButton;
