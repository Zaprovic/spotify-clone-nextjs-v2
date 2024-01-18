import Footer from "@/components/footer";
import SearchCard from "@/components/page-search/search-card";
import styles from "@/styles/search-page.module.css";

const SearchPage = () => {
    return (
        <div className="h-full w-full overflow-y-scroll bg-neutral-900">
            <main className="px-6 py-6">
                <h1 className=" mb-6 text-2xl font-bold -tracking-wider">
                    Browse all
                </h1>

                <section className={`${styles.searchContainer} gap-3 pb-16`}>
                    {Array.from({ length: 77 }, (_, index) => (
                        <SearchCard
                            key={index + 1}
                            title={`Music ${index + 1}`}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SearchPage;
