import styles from "@/styles/main-page.module.css";
import Link from "next/link";
import { ReactNode } from "react";
import DailyMixCard from "./daily-mix-card";

const PageSection = ({
    title,
    children,
}: {
    title: string;
    children?: ReactNode;
}) => {
    return (
        <section>
            <div className="flex justify-between">
                <Link href={"#"} className="hover:underline">
                    <h2 className="mb-4 text-2xl font-bold -tracking-wider">
                        {title}
                    </h2>
                </Link>
                <Link
                    href={"#"}
                    className="text-sm font-bold text-zinc-400 hover:underline"
                >
                    Show all
                </Link>
            </div>

            <div className={`gap-6 ${styles.cardContainer}`}>
                <DailyMixCard />
                <DailyMixCard />
                <DailyMixCard />
                <DailyMixCard />
                <DailyMixCard />
                <DailyMixCard />
                <DailyMixCard />
            </div>
        </section>
    );
};

export default PageSection;
