import SpotifyIcon from "@/icons/spotify-icon";

const SignupPage = () => {
    return (
        <>
            <header className="flex p-8">
                <SpotifyIcon className="h-auto w-[104px] self-start" />
            </header>

            <main>
                <div className="mx-auto w-full max-w-[388px]">
                    <h1 className="text-5xl font-bold leading-tight -tracking-wider ">
                        Sign up to start listening
                    </h1>
                </div>
            </main>
        </>
    );
};

export default SignupPage;
