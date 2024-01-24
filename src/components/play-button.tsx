"use client";
import PauseIcon from "@/icons/pause-icon";
import PlayIcon from "@/icons/play-icon";
import { useMusicStore } from "@/store/music";
import { ButtonHTMLAttributes } from "react";

interface btnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PlayButton = ({
    bgColor = "bg-green-500",
    styles = "absolute bottom-24 right-5 z-10 p-3 rounded-full transition-all hover:scale-105 p-3 rounded-full",
    width = 20,
    height = 20,
}) => {
    const { isOn, setIsOn } = useMusicStore((state) => state);
    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <button onClick={handleClick} className={`${bgColor} ${styles}`}>
            {!isOn ? (
                <PlayIcon width={width} height={height} />
            ) : (
                <PauseIcon width={width} height={height} />
            )}
        </button>
    );
};

export default PlayButton;
