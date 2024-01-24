import LoginButton from "@/components/page-install/login-button";
import LoginForm from "@/components/page-install/login-form";
import AppleIcon from "@/icons/apple-icon";
import FacebookIconColor from "@/icons/facebook-icon-color";
import GoogleIcon from "@/icons/google-icon";
import SpotifyIcon from "@/icons/spotify-icon";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div id="login-app">
            <header className="bg-black pl-8 pt-12 md:py-8 md:pl-[3.25rem]">
                <div className="h-auto w-[78px] md:w-[116px]">
                    <SpotifyIcon />
                </div>
            </header>

            <main className="px-8 py-10">
                <section className="mx-auto max-w-[736px] bg-black md:rounded-lg md:px-48 md:py-16">
                    <h2 className="text-3xl font-bold -tracking-wider md:pb-6 md:text-center md:text-5xl">
                        Log in to Spotify
                    </h2>

                    <div className="mt-8 flex flex-col gap-3 md:px-4">
                        <LoginButton btnName="Google" provider={"google"}>
                            <GoogleIcon />
                        </LoginButton>
                        <button className="flex items-center gap-2 rounded-full border border-neutral-400 px-5 py-3 pl-8 hover:border-neutral-100">
                            <FacebookIconColor />
                            <h5 className="w-full flex-1 text-center font-bold">
                                Continue with Facebook
                            </h5>
                        </button>
                        <button className="flex items-center gap-2 rounded-full border border-neutral-400 px-5 py-3 pl-8 hover:border-neutral-100">
                            <AppleIcon />
                            <h5 className="w-full flex-1 text-center font-bold">
                                Continue with Apple
                            </h5>
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-full border border-neutral-400 px-5 py-3 pl-8 font-bold hover:border-neutral-100">
                            Continue with phone number
                        </button>
                    </div>

                    <hr className="my-10 h-[0.05rem] w-full rounded-full border-neutral-800" />

                    <LoginForm />

                    <Link
                        href={"#"}
                        className="flex items-center justify-center py-7 text-center transition-all hover:text-green-500 hover:underline "
                    >
                        Forgot your password?
                    </Link>

                    <hr className="h-[0.05rem] w-full rounded-full border-neutral-800" />

                    <p className="mt-16 flex w-full justify-center gap-1">
                        <span>Don&apos;t have an account? </span>
                        <Link
                            href={"#"}
                            className=" transition-all hover:text-green-500 hover:underline"
                        >
                            Sign up for Spotify
                        </Link>
                    </p>
                </section>
            </main>

            <footer className="grid h-full w-full place-items-center bg-neutral-950 py-10">
                <p className="text-xs text-neutral-400">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                </p>
            </footer>
        </div>
    );
};

export default LoginPage;
