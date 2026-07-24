import React, {useEffect, useRef} from "react";
import { useTour } from "../contexts";
import TourCard from "../components/cards/TourCard";
import { Searchbar } from "../shared";
import { Filter } from "../components/searchFilters";

function ToursPage() {
    const topRef = useRef(null);
    const { visibleTours } = useTour();

    useEffect(() => {
        topRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    }, []);

    return (
        <>
        <span ref={topRef}></span>
            <div className="w-full">
                <h1
                    className="
                        mt-10
                        mb-5
                        text-center
                        text-5xl
                        font-black
                        text-[var(--text)]
                    "
                >
                    Your Next Adventure
                </h1>
                <div className="mx-auto mt-10 w-full max-w-7xl px-6">
                    <div className="mx-auto max-w-xl">
                        <Searchbar />
                    </div>

                    <div className="mx-auto mt-6 w-full max-w-7xl">
                        <Filter />
                    </div>
                </div>

                <div
                    className="
                        mx-auto
                        mt-12
                        flex
                        w-full
                        max-w-7xl
                        flex-wrap
                        justify-center
                        gap-x-8
                        gap-y-8
                        px-6
                    "
                >
                    {visibleTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            id={tour.id}
                            image={`/${tour.slug}.jpg`}
                            title={tour.title}
                            place={{
                                country: tour.country,
                                city: tour.city,
                                continent: tour.continent,
                            }}
                            category={tour.category}
                            duration={tour.duration}
                            rating={tour.rating}
                            price={tour.price}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ToursPage;