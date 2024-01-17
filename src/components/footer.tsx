import FacebookIcon from "@/icons/facebook-icon";
import InstagramIcon from "@/icons/instagram-icon";
import TwitterIcon from "@/icons/twitter-icon";
import Link from "next/link";
import FooterItem from "./footer-item";
import FooterList from "./footer-list";

const Footer = () => {
    return (
        <footer className="flex flex-col bg-inherit px-6 pb-20">
            <div className="flex items-start justify-between">
                <div className="flex gap-32">
                    <FooterList title="Company">
                        <FooterItem href="#" name="About" />
                        <FooterItem href="#" name="Jobs" />
                        <FooterItem href="#" name="For the Record" />
                    </FooterList>

                    <FooterList title="Communities">
                        <FooterItem href="#" name="For Artists" />
                        <FooterItem href="#" name="Developers" />
                        <FooterItem href="#" name="Advertising" />
                        <FooterItem href="#" name="Investors" />
                        <FooterItem href="#" name="Vendors" />
                    </FooterList>

                    <FooterList title="Useful links">
                        <FooterItem href="#" name="Support" />
                        <FooterItem href="#" name="Free Mobile App" />
                    </FooterList>
                </div>
                <ul className="flex gap-3">
                    <li>
                        <Link href={"#"}>
                            <button className="rounded-full bg-zinc-800 p-3 transition-all hover:bg-zinc-600">
                                <InstagramIcon />
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <button className="rounded-full bg-zinc-800 p-3 transition-all hover:bg-zinc-600">
                                <TwitterIcon />
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <button className="rounded-full bg-zinc-800 p-3 transition-all hover:bg-zinc-600">
                                <FacebookIcon />
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>

            <hr className="my-10 h-px border-0 bg-gray-200 dark:bg-gray-700" />

            <div className="flex justify-between text-sm text-zinc-400 ">
                <ul className="flex gap-4">
                    <li className="transition-all hover:text-zinc-100">
                        <Link href={"#"}>Legal</Link>
                    </li>
                    <li className="transition-all hover:text-zinc-100">
                        <Link href={"#"}>Privacy Center</Link>
                    </li>
                    <li className="transition-all hover:text-zinc-100">
                        <Link href={"#"}>Privacy Policy</Link>
                    </li>
                    <li className="transition-all hover:text-zinc-100">
                        <Link href={"#"}>Cookies</Link>
                    </li>
                    <li className="transition-all hover:text-zinc-100">
                        <Link href={"#"}>About Ads</Link>
                    </li>
                    <li className="transition-all hover:text-zinc-100">
                        <Link href={"#"}>Accesibility</Link>
                    </li>
                </ul>

                <p className="pr-2">© 2024 Spotify AB</p>
            </div>
        </footer>
    );
};

export default Footer;
