"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

const TitleUser = ({ children }: { children?: ReactNode }) => {
    const { data: session } = useSession();
    const isUserSession = session?.user !== undefined;

    return (
        <>
            {isUserSession ? (
                <span>{session.user?.name}</span>
            ) : (
                <span>you</span>
            )}
        </>
    );
};

export default TitleUser;
