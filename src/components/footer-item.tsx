import Link from "next/link";

const FooterItem = ({ href, name }: { href: string; name: string }) => {
    return (
        <li>
            <Link
                href={href}
                className="text-zinc-400 hover:text-zinc-100 hover:underline"
            >
                {name}
            </Link>
        </li>
    );
};

export default FooterItem;
