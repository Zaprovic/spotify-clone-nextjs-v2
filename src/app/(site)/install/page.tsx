import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const InstallPage = () => {
    return (
        <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-b from-blue-950 via-zinc-900 to-neutral-900">
            <figure className="mx-auto flex max-w-[640px] flex-col items-center justify-center px-2 pt-44">
                <Image
                    src={
                        "https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png"
                    }
                    alt="Install Spotify in your local machine"
                    width={640}
                    height={396}
                />
                <figcaption className="text-center text-[2rem] font-bold leading-tight -tracking-wider">
                    Seamlessly listen to music you love. Download the Spotify
                    app for your computer.
                </figcaption>

                <Link
                    href={"https://www.spotify.com/co-en/download/windows/"}
                    target="_blank"
                >
                    <button className="mt-7 rounded-full bg-green-500 px-8 py-3 font-bold text-black transition-all hover:scale-105">
                        Get our free app
                    </button>
                </Link>
            </figure>
            <Footer />
        </div>
    );
};

export default InstallPage;
