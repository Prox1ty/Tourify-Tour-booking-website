import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { useTour } from "../../contexts";
import DestinationHeroCard from "../cards/DestinationHeroCard";

function PopularDestinations() {
    const { tours } = useTour();

    const destinations = useMemo(() => {
        return [...tours]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
    }, [tours]);

    const [active, setActive] = useState(1);

    return (
        <section className="py-32 overflow-hidden">

            <div className="mx-auto max-w-7xl">

                <h2 className="text-center text-5xl font-black text-[var(--text)]">
                    Popular Destinations
                </h2>

                <p className="mt-4 text-center text-xl text-[var(--text-muted)]">
                    Hand-picked places loved by thousands of travellers.
                </p>

                <div
                    className="
                        mt-24
                        flex
                        items-center
                        justify-center
                    "
                >
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            layout
                            onHoverStart={() => setActive(index)}
                            animate={{
                                x:
                                    index === 0
                                        ? 90
                                        : index === 2
                                        ? -90
                                        : 0,
                                zIndex: active === index ? 50 : 10,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 170,
                                damping: 22,
                            }}
                        >
                            <DestinationHeroCard
                                destination={destination}
                                active={active === index}
                                onHover={() => setActive(index)}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default PopularDestinations;