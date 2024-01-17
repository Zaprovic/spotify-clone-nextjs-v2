import Image from "next/image";

const InstallPage = () => {
    return (
        <>
            <div className="bg-inherit">
                <figure className="mx-auto flex max-w-[640px] flex-col items-center justify-center px-2 pt-16">
                    <Image
                        src={
                            "https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png"
                        }
                        alt="Install Spotify in your local machine"
                        width={640}
                        height={396}
                    />
                    <figcaption className="text-center text-3xl font-bold -tracking-wider">
                        Seamlessly listen to music you love. Download the
                        Spotify app for your computer.
                    </figcaption>
                </figure>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default InstallPage;
