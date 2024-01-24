import Footer from "@/components/footer";
import DailyMix from "@/components/page-main/daily-mix";
import DailyMixCard from "@/components/page-main/daily-mix-card";
import GreetingTitle from "@/components/page-main/greeting-title";
import PageSection from "@/components/page-main/page-section";
import TitleUser from "@/components/page-main/title-user";
import styles from "@/styles/main-page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="h-full w-full overflow-y-scroll bg-neutral-900 px-6 py-2">
                <GreetingTitle />

                <div className="section-container mt-3 flex flex-col gap-14">
                    <section className={`${styles.dailyMixes} my-3 gap-2`}>
                        <DailyMix />
                        <DailyMix />
                        <DailyMix />
                        <DailyMix />
                        <DailyMix />
                        <DailyMix />
                    </section>

                    <section>
                        <div className="flex justify-between">
                            <Link href={"#"} className="hover:underline">
                                <h2 className="mb-4 text-2xl font-bold -tracking-wider">
                                    Made for <TitleUser />
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

                    <PageSection title="Your top mixes" />
                    <PageSection title="Recently played" />
                    <PageSection title="Episodes for you" />
                    <PageSection title="Based on your recent listening" />
                    <PageSection title="Popular albums" />
                    <PageSection title="En tendencia" />
                    <PageSection title="Today's biggest hit" />
                    <PageSection title="Popular radio" />
                    <PageSection title="Colombia's favourite artists" />
                    <PageSection title="Salsa idols" />
                    <PageSection title="Made in Medellin" />
                    <PageSection title="Recommended radio" />
                </div>

                <Footer />
            </div>
        </>
    );
}
