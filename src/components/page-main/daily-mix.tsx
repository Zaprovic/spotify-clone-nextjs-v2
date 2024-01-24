"use client";
import pokeball from "@/images/pokeball.webp";
import Image from "next/image";
import { useState } from "react";
import PlayButton from "../play-button";

const DailyMix = () => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <article
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex h-[60px] items-center overflow-hidden rounded transition-all"
        >
            <figure className="aspect-square h-full">
                <Image
                    src={pokeball}
                    alt="Placeholder image"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square h-full w-auto"
                />
            </figure>

            <div className="relative flex w-full items-center justify-between px-3">
                <div className="absolute inset-0 bg-zinc-700 blur-3xl transition-all hover:blur-xl"></div>
                <h2 className="relative z-10 w-fit font-bold">Laulud</h2>
                {isHovering && (
                    <PlayButton
                        className="z-10 rounded-full bg-green-500 p-2 transition-transform hover:scale-110"
                        width={16}
                        height={16}
                    />
                )}
            </div>
        </article>
    );
};

export default DailyMix;
