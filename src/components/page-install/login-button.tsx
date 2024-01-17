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
            className="flex items-center gap-2 rounded-full border border-neutral-400 px-5 py-3 pl-8 hover:border-neutral-100"
        >
            {children}
            <h5 className="w-full flex-1 text-center font-bold">
                Continue with {name}
            </h5>
        </button>
    );
};

export default LoginButton;
