import LikeIcon from "@/icons/like-icon";
import NotificationsIcon from "@/icons/notifications-icon";
import { Link } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";

// todo : handle user image better in the future

const ContentHeaderNavbar = ({ session }: { session: Session }) => {
    return (
        <>
            {session.user?.image && (
                <nav className="flex gap-2">
                    <Link
                        href={"/install"}
                        className="flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-3 py-1 text-sm font-bold transition-all hover:scale-105"
                    >
                        <LikeIcon />
                        <span>Install App</span>
                    </Link>

                    <Link
                        href={"/notifications"}
                        className="rounded-full bg-neutral-950 p-2 transition-all hover:scale-105"
                    >
                        <NotificationsIcon />
                    </Link>

                    <button>
                        <figure className="rounded-full bg-neutral-950 p-1 transition-all hover:scale-105 hover:bg-black">
                            <Image
                                src={session.user?.image}
                                alt="Profile picture"
                                width={24}
                                height={24}
                                className="rounded-full object-cover"
                            />
                        </figure>
                    </button>
                </nav>
            )}
        </>
    );
};

export default ContentHeaderNavbar;
