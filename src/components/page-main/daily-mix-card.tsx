import pokeball from "@/images/pokeball.webp";
import Image from "next/image";
import Link from "next/link";
import PlayButton from "../play-button";

const DailyMixCard = () => {
    return (
        <Link href={"#"}>
            <article className="group relative flex flex-col rounded-lg bg-zinc-800 p-3 transition-all hover:bg-zinc-700 hover:shadow-xl">
                <figure>
                    <Image
                        src={pokeball}
                        alt="Placeholder image"
                        className="rounded-lg"
                    />
                </figure>
                <h3 className="mt-3 font-bold">Daily Mix</h3>
                <p className="line-clamp-2 text-sm text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam tempora ad fuga temporibus corporis excepturi nostrum
                    suscipit officia expedita dicta, ipsam voluptates quo ipsum
                    minus. Recusandae tempora voluptatem facilis corrupti!
                </p>
                <div
                    className={`absolute bottom-0 right-[-2px] z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100`}
                >
                    <PlayButton className="absolute bottom-24 right-5 p-3" />
                </div>
            </article>
        </Link>
    );
};

export default DailyMixCard;
