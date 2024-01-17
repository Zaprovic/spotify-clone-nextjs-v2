import { ReactNode } from "react";

const FooterList = ({
    title,
    children,
}: {
    title: string;
    children?: ReactNode;
}) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-bold text-zinc-100">{title}</h3>
            <ul className="flex flex-col gap-1">{children}</ul>
        </div>
    );
};

export default FooterList;
