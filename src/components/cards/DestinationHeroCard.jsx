import { motion } from "framer-motion";
import { Touchpad } from "lucide-react";
import { LuArrowRight, LuMapPin, LuStar } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function DestinationHeroCard({ destination, active, onHover }) {
    const navigate = useNavigate();

    return (
        <motion.div
            onHoverStart={onHover}
            layout
            transition={{
                type: "spring",
                stiffness: 170,
                damping: 22,
            }}
            animate={{
                scale: active ? 1.08 : 0.88,
                y: active ? -20 : 15,
                filter: active
                    ? "grayscale(0%) brightness(100%)"
                    : "grayscale(100%) brightness(75%)",
                zIndex: active ? 50 : 10,
            }}
            className="
                relative
                h-[650px]
                w-[380px]
                overflow-hidden
                rounded-3xl
                cursor-pointer
                shadow-2xl
                transform-gpu
            "
        >
            <motion.img
                src={`/${destination.slug}.jpg`}
                alt={destination.country}
                animate={{
                    scale: active ? 1.12 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 170,
                    damping: 22,
                }}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                "
            />

            <div className="absolute bottom-0 w-full p-8 text-white">

            <div
                className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full
                    border
                    border-white/20

                    bg-black/35
                    backdrop-blur-md

                    px-3
                    py-1.5

                    text-yellow-400
                    shadow-lg
                "
            >
                <LuStar className="fill-yellow-400" size={16} />
                <span className="font-semibold text-sm">
                    {destination.rating}
                </span>
            </div>

                <h2 className="mt-4 text-5xl font-black">
                    {destination.country}
                </h2>

                <p className="mt-2 flex items-center gap-2">
                    <LuMapPin />
                    {destination.city}
                </p>

                <p className="mt-5 line-clamp-3 leading-7 text-gray-200">
                    {destination.description}
                </p>

                <button
                    className="
                        mt-8
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        px-6
                        py-3
                        font-semibold
                        text-black
                        transition
                        hover:gap-4
                    "
                    onClick={() => navigate(`/tours/${destination.id}`)}
                >
                    Explore
                    <LuArrowRight />
                </button>

            </div>
        </motion.div>
    );
}

export default DestinationHeroCard;