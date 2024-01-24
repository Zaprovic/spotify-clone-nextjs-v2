"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import { LiteralUnion, signIn } from "next-auth/react";
import { ButtonHTMLAttributes } from "react";

interface btnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnName: string;
    provider: LiteralUnion<BuiltInProviderType> | undefined;
}

const LoginButton = ({ btnName, provider, ...props }: btnProps) => {
    return (
        <button
            onClick={() =>
                signIn(provider, {
                    callbackUrl: "/",
                })
            }
            className="flex items-center gap-2 rounded-full border border-neutral-400 px-5 py-3 pl-8 hover:border-neutral-100"
            {...props}
        >
            {props.children}
            <h5 className="w-full flex-1 text-center font-bold">
                Continue with {btnName}
            </h5>
        </button>
    );
};

export default LoginButton;
