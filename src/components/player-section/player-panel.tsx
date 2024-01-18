import ConnectToDeviceIcon from "@/icons/connect-to-device-icon";
import FullScreenIcon from "@/icons/full-screen-icon";
import MicrophoneIcon from "@/icons/microphone-icon";
import MiniPlayerIcon from "@/icons/mini-player-icon";
import NowPlayingIcon from "@/icons/now-playing-icon";
import QueueIcon from "@/icons/queue-icon";
import VolumeLowIcon from "@/icons/volume-low-icon";
import { Slider } from "../ui/slider";

const PlayerPlanel = () => {
    return (
        <div className="flex items-center justify-end gap-3 text-zinc-400">
            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <NowPlayingIcon />
            </button>

            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <MicrophoneIcon />
            </button>

            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <QueueIcon />
            </button>

            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <ConnectToDeviceIcon />
            </button>

            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <VolumeLowIcon />
            </button>
            <Slider className="w-[60px] " />

            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <MiniPlayerIcon />
            </button>

            <button className="text-zinc-400 transition-all hover:text-zinc-100">
                <FullScreenIcon />
            </button>
        </div>
    );
};

export default PlayerPlanel;
