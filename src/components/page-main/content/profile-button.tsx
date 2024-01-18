const ProfileButton = () => {
    return (
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
    );
};

export default ProfileButton;
