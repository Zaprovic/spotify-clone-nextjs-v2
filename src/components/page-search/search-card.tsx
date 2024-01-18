import pokeball from "@/images/pokeball.webp";
import Image from "next/image";
import Link from "next/link";

const SearchCard = ({ title, href }: { title: string; href?: string }) => {
    return (
        <Link href={"#"}>
            <article className="relative aspect-square overflow-hidden rounded-md bg-cyan-800 p-3">
                <h3 className="text-2xl font-bold -tracking-wider">{title}</h3>
                <Image
                    src={pokeball}
                    alt="Placeholder image"
                    width={100}
                    height={100}
                    className="absolute bottom-[-10px] right-[-20px] rotate-[30deg]"
                />
            </article>
        </Link>
    );
};

export default SearchCard;
