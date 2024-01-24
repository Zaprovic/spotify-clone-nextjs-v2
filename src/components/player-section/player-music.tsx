import LoopIcon from "@/icons/loop-icon";
import NextSong from "@/icons/next-song";
import PreviousSong from "@/icons/previous-song";
import ShuffleIcon from "@/icons/shuffle-icon";
import PlayButton from "../play-button";
import { Slider } from "../ui/slider";

const PlayerMusic = () => {
    return (
        <div className="flex flex-1 flex-col items-center gap-2 px-[24rem]">
            <div className="flex items-center gap-6 pt-1 ">
                <button className="text-zinc-400 transition-all hover:text-zinc-100">
                    <ShuffleIcon />
                </button>

                <button className="text-zinc-400 transition-all hover:text-zinc-100">
                    <PreviousSong />
                </button>

                <PlayButton
                    className="rounded-full bg-white p-2 transition-all hover:scale-105"
                    width={16}
                    height={16}
                />

                <button className="text-zinc-400 transition-all hover:text-zinc-100">
                    <NextSong />
                </button>

                <button className="text-zinc-400 transition-all hover:text-zinc-100">
                    <LoopIcon />
                </button>
            </div>
            <div className="flex w-full items-center gap-2">
                <p className="text-xs text-zinc-400">0:20</p>
                <Slider className="flex-1" />
                <p className="text-xs text-zinc-400">3:43</p>
            </div>
        </div>
    );
};

export default PlayerMusic;
