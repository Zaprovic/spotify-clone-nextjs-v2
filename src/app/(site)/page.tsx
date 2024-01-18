import DailyMix from "@/components/page-main/daily-mix";
import GreetingTitle from "@/components/page-main/greeting-title";
import styles from "@/styles/main-page.module.css";

export default function Home() {
    return (
        <div className="h-full w-full bg-neutral-900 px-6 py-2">
            <GreetingTitle />

            <div className={`${styles.dailyMixes} my-3 gap-2`}>
                <DailyMix />
                <DailyMix />
                <DailyMix />
                <DailyMix />
                <DailyMix />
                <DailyMix />
            </div>
        </div>
    );
}
