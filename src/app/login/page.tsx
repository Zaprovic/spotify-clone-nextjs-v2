import LoginButton from "@/components/page-install/login-button";
import AppleIcon from "@/icons/apple-icon";
import FacebookIconColor from "@/icons/facebook-icon-color";
import GoogleIcon from "@/icons/google-icon";
import SpotifyIcon from "@/icons/spotify-icon";

const LoginPage = () => {
	return (
		<div id="login-app">
			<header className="bg-black pt-12 pl-8 md:py-8 md:pl-[3.25rem]">
				<div className="w-[78px] h-auto md:w-[116px]">
					<SpotifyIcon />
				</div>
			</header>

			<main className="px-8 pt-10">
				<section className="bg-black md:px-48 md:py-16 md:rounded-lg max-w-[736px] mx-auto">
					<h2 className="text-3xl md:text-5xl md:text-center md:pb-6 -tracking-wider font-bold">
						Log in to Spotify
					</h2>

					<div className="flex flex-col gap-3 mt-8 md:px-4">
						<LoginButton name="Google">
							<GoogleIcon />
						</LoginButton>
						<button className="flex gap-2 border border-neutral-400 hover:border-neutral-100 pl-8 py-3 items-center px-5 rounded-full">
							<FacebookIconColor />
							<h5 className="flex-1 w-full text-center font-bold">
								Continue with Facebook
							</h5>
						</button>
						<button className="flex gap-2 border border-neutral-400 hover:border-neutral-100 pl-8 py-3 items-center px-5 rounded-full">
							<AppleIcon />
							<h5 className="flex-1 w-full text-center font-bold">
								Continue with Apple
							</h5>
						</button>
						<button className="flex gap-2 border border-neutral-400 hover:border-neutral-100 pl-8 py-3 items-center justify-center px-5 rounded-full font-bold">
							Continue with phone number
						</button>
					</div>

					<hr className="border-neutral-800 h-[0.05rem] w-full rounded-full my-10" />

					<button className="py-3  bg-green-500 text-black font-extrabold hover:scale-105 transition-all rounded-full w-full">
						Log In
					</button>
				</section>
			</main>
		</div>
	);
};

export default LoginPage;
