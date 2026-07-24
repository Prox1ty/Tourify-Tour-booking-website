import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTour } from "../../contexts";
import {
    LuArrowRight,
    LuHeart,
    LuMapPin,
    LuStar,
    LuClock3,
} from "react-icons/lu";

function TourCard({
    id,
    image,
    title,
    place,
    category,
    duration,
    rating,
    price,
}) {
    const navigate = useNavigate();
    const { favorites, setFavorites } = useTour();

    const isFavorite = favorites.includes(id);

    const toggleFavorite = () => {
        setFavorites((prev) =>
            prev.includes(id)
                ? prev.filter((tourId) => tourId !== id)
                : [...prev, id]
        );
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
            whileHover={{
                y: -10,
            }}
            className="
                group
                flex
                flex-col

                w-[360px]
                min-h-[560px]

                overflow-hidden
                rounded-3xl

                bg-[var(--surface)]

                shadow-lg

                cursor-pointer
            "
        >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">

                <motion.img
                    src={image}
                    alt={title}
                    whileHover={{ scale: 1.08 }}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                    }}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />

                <motion.button
                    whileHover={{
                        scale: 1.15,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                    onClick={toggleFavorite}
                    className="
                        absolute
                        right-4
                        top-4

                        flex
                        h-11
                        w-11
                        items-center
                        justify-center

                        rounded-full

                        bg-white/80
                        backdrop-blur-md

                        shadow-lg
                    "
                >
                    <LuHeart
                        size={22}
                        className={
                            isFavorite
                                ? "fill-red-500 text-red-500"
                                : "text-slate-700"
                        }
                    />
                </motion.button>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">

                {/* Rating + Duration */}
                <div className="flex items-center justify-between text-sm">

                    <div className="flex items-center gap-1 text-yellow-500">
                        <LuStar className="fill-yellow-400" />
                        <span className="font-medium text-[var(--text)]">
                            {rating}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-[var(--text-muted)]">
                        <LuClock3 size={16} />
                        <span>{duration} Days</span>
                    </div>

                </div>

                {/* Title */}
                <h3
                    className="
                        mt-4

                        text-2xl
                        font-bold

                        text-[var(--text)]

                        transition-colors
                        duration-300

                        group-hover:text-[var(--primary)]
                    "
                >
                    {title}
                </h3>

                {/* Location */}
                <div
                    className="
                        mt-3

                        flex
                        items-center
                        gap-2

                        text-[var(--text-muted)]
                    "
                >
                    <LuMapPin size={16} />
                    <span>
                        {place.city}, {place.country}
                    </span>
                </div>

                {/* Category */}
                <div className="mt-4">
                    <span
                        className="
                            inline-flex

                            rounded-full

                            bg-[var(--surface-secondary)]

                            px-3
                            py-1

                            text-sm
                            font-medium

                            text-[var(--text-muted)]
                        "
                    >
                        {category}
                    </span>
                </div>

                {/* Push bottom section down */}
                <div className="mt-auto pt-8">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-[var(--text-muted)]">
                                Starting from
                            </p>

                            <p className="text-3xl font-black text-[var(--text)]">
                                ${price}
                            </p>

                        </div>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            onClick={() => navigate(`/tour/${id}`)}
                            className="
                                flex
                                items-center
                                gap-2

                                rounded-xl

                                bg-[var(--primary)]

                                px-5
                                py-3

                                font-semibold
                                text-white

                                shadow-lg
                            "
                        >
                            Explore
                            <LuArrowRight />
                        </motion.button>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}

export default TourCard;