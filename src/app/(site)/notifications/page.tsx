const NotificationsPage = () => {
    return (
        <div className="h-full overflow-y-scroll bg-neutral-900 px-6 py-8">
            <h1 className="text-4xl font-bold -tracking-wider">
                What&apos;s New
            </h1>

            <h4 className="mb-3 mt-1 text-sm text-neutral-400">
                The latest releases from artists, podcasts, and shows you
                follow.
            </h4>
            <div className="flex gap-3">
                <button className="rounded-full bg-neutral-800 px-3 py-[0.375rem] text-sm font-normal hover:opacity-70">
                    Music
                </button>
                <button className="rounded-full bg-neutral-800 px-3 py-[0.375rem] text-sm font-normal hover:opacity-70">
                    Podcast & Show
                </button>
            </div>
        </div>
    );
};

export default NotificationsPage;
