import LikeIcon from "@/icons/like-icon";
import pokeball from "@/images/pokeball.webp";
import Image from "next/image";
import Link from "next/link";

const CurrentSong = () => {
    return (
        <section className="flex items-center gap-4">
            <figure>
                <Image
                    src={pokeball}
                    alt="Placeholder image"
                    width={56}
                    height={56}
                    className="rounded-md"
                />
            </figure>

            <div className="mt-1 flex flex-col">
                <Link href={"#"} className="hover:underline">
                    <h3 className="text-sm">Song name</h3>
                </Link>
                <Link href={"#"} className="hover:underline">
                    <h4 className="pr-4 text-xs text-zinc-400">Song artist</h4>
                </Link>
            </div>
            <button>
                <LikeIcon />
            </button>
        </section>
    );
};

export default CurrentSong;
