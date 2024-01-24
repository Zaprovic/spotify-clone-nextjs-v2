"use client";
import PauseIcon from "@/icons/pause-icon";
import PlayIcon from "@/icons/play-icon";
import { useMusicStore } from "@/store/music";
import cn from "clsx";
import { ButtonHTMLAttributes } from "react";

interface btnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: number;
    height?: number;
}

const PlayButton = ({
    width = 20,
    height = 20,
    className,
    ...props
}: btnProps) => {
    const { isOn, setIsOn } = useMusicStore((state) => state);
    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                " z-10 rounded-full bg-green-500 transition-all hover:scale-105",
                className,
            )}
            {...props}
        >
            {!isOn ? (
                <PlayIcon width={width} height={height} />
            ) : (
                <PauseIcon width={width} height={height} />
            )}
        </button>
    );
};

export default PlayButton;
