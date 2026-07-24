import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuSquareArrowDown, LuX } from "react-icons/lu";
import { useTour } from "../../contexts";

function Filter() {
    const defaultFilters = {
        category: "All",
        continent: "All",
        maxDuration: 24,
        maxPrice: 5000,
        minRating: 0,
    };

    const [isActive, setIsActive] = useState(false);

    const { tours, filters, setFilters } = useTour();

    const toggleIsActive = () => {
        setIsActive(prev => !prev);
    };

    // Replace these later

    const getUniqueValues = (key) => {
    return [
        "All",
        ...new Set(
            tours
                .map((tour) => tour[key])
                .filter(Boolean)
                .sort()
        ),
    ];
};

    const categories = useMemo(() => getUniqueValues("category"), [tours]);
    const continents = useMemo(() => getUniqueValues("continent"), [tours]);
    const countries = useMemo(() => getUniqueValues("country"), [tours]);
    const cities = useMemo(() => getUniqueValues("city"), [tours]);
    const difficulties = useMemo(() => getUniqueValues("difficulty"), [tours]);

    return (
    <>
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleIsActive}
            className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-5
                py-3
                text-[var(--text)]
                shadow-md
            "
        >
            <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <LuSquareArrowDown size={18} />
            </motion.div>

            <span className="font-medium">
                Filters
            </span>
        </motion.button>

        <AnimatePresence initial={false}>
            {isActive && (
                <motion.div
                    initial={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                    }}
                    transition={{
                        duration: 0.18,
                    }}
                    className="
                        mt-6
                        w-full
                        overflow-hidden
                        rounded-3xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]
                        p-8
                        shadow-xl
                    "
                >
                    <h3
                        className="
                            mb-8
                            text-center
                            text-2xl
                            font-bold
                            text-[var(--text)]
                        "
                    >
                        Filters
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">

                        {/* Category */}
                        <label className="flex flex-col gap-2">
                            <span className="font-medium text-[var(--text)]">
                                Category
                            </span>

                            <select
                                value={filters.category}
                                onChange={(e) =>
                                    setFilters(prev => ({
                                        ...prev,
                                        category: e.target.value,
                                    }))
                                }
                                className="
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--surface-secondary)]
                                    px-4
                                    py-3
                                    text-[var(--text)]
                                    outline-none
                                    focus:border-[var(--primary)]
                                "
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {/* Continent */}
                        <label className="flex flex-col gap-2">
                            <span className="font-medium text-[var(--text)]">
                                Continent
                            </span>

                            <select
                                value={filters.continent}
                                onChange={(e) =>
                                    setFilters(prev => ({
                                        ...prev,
                                        continent: e.target.value,
                                    }))
                                }
                                className="
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--surface-secondary)]
                                    px-4
                                    py-3
                                    text-[var(--text)]
                                    outline-none
                                    focus:border-[var(--primary)]
                                "
                            >
                                {continents.map(continent => (
                                    <option key={continent} value={continent}>
                                        {continent}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {/* Max Price */}
                        <label className="flex flex-col gap-2">
                            <span className="font-medium text-[var(--text)]">
                                Max Price
                            </span>

                            <span className="text-sm text-[var(--text-muted)]">
                                ${filters.maxPrice}
                            </span>

                            <input
                                type="range"
                                min={0}
                                max={5000}
                                value={filters.maxPrice}
                                onChange={(e) =>
                                    setFilters(prev => ({
                                        ...prev,
                                        maxPrice: Number(e.target.value),
                                    }))
                                }
                            />
                        </label>

                        {/* Duration */}
                        <label className="flex flex-col gap-2">
                            <span className="font-medium text-[var(--text)]">
                                Maximum Duration
                            </span>

                            <span className="text-sm text-[var(--text-muted)]">
                                {filters.maxDuration} Days
                            </span>

                            <input
                                type="range"
                                min={1}
                                max={24}
                                value={filters.maxDuration}
                                onChange={(e) =>
                                    setFilters(prev => ({
                                        ...prev,
                                        maxDuration: Number(e.target.value),
                                    }))
                                }
                            />
                        </label>

                        {/* Rating */}
                        <label className="flex flex-col gap-2">
                            <span className="font-medium text-[var(--text)]">
                                Minimum Rating
                            </span>

                            <span className="text-sm text-[var(--text-muted)]">
                                {filters.minRating.toFixed(1)} ★
                            </span>

                            <input
                                type="range"
                                min={0}
                                max={5}
                                step={0.1}
                                value={filters.minRating}
                                onChange={(e) =>
                                    setFilters(prev => ({
                                        ...prev,
                                        minRating: Number(e.target.value),
                                    }))
                                }
                            />
                        </label>

                    </div>

                    <div className="mt-8 flex justify-end gap-4">

                        <button
                            onClick={() => setFilters(defaultFilters)}
                            className="
                                rounded-xl
                                bg-[var(--surface-secondary)]
                                px-6
                                py-3
                                font-semibold
                                text-[var(--text)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Reset
                        </button>

                        <button
                            onClick={toggleIsActive}
                            className="
                                rounded-xl
                                bg-[var(--primary)]
                                px-6
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:brightness-110
                            "
                        >
                            Close
                        </button>

                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    </>
);
}

export default Filter;