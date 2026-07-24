import { useNavigate } from "react-router-dom";
import {
    LuShieldCheck,
    LuBadgeDollarSign,
    LuMapPinned,
    LuHeadphones,
    LuArrowRight,
} from "react-icons/lu";

function WhyChooseUs() {
    const navigate = useNavigate();

    const features = [
        {
            icon: <LuMapPinned size={34} />,
            title: "Curated Destinations",
            description:
                "Every tour is carefully selected to provide unforgettable experiences around the world.",
        },
        {
            icon: <LuBadgeDollarSign size={34} />,
            title: "Best Price Guarantee",
            description:
                "Competitive prices with no hidden costs, ensuring maximum value for every trip.",
        },
        {
            icon: <LuShieldCheck size={34} />,
            title: "Trusted & Secure",
            description:
                "Book confidently with secure payments and highly-rated travel partners.",
        },
        {
            icon: <LuHeadphones size={34} />,
            title: "24/7 Support",
            description:
                "Our travel experts are always available to help before, during, and after your journey.",
        },
    ];

    return (
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-center text-5xl font-black text-[var(--text)]">
                    Why Choose Us
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-[var(--text-muted)]">
                    We make travel simple, memorable, and stress-free with
                    carefully crafted experiences and world-class customer
                    service.
                </p>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="
                                group
                                rounded-3xl
                                border
                                border-[var(--border)]
                                bg-[var(--surface)]
                                p-8
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-[var(--primary)]
                                hover:shadow-2xl
                            "
                        >
                            <div
                                className="
                                    mb-6
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[var(--primary)]/10
                                    text-[var(--primary)]
                                    transition
                                    group-hover:scale-110
                                "
                            >
                                {feature.icon}
                            </div>

                            <h3 className="mb-3 text-2xl font-bold text-[var(--text)]">
                                {feature.title}
                            </h3>

                            <p className="leading-7 text-[var(--text-muted)]">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="mt-24 flex justify-center">
                    <button
                        onClick={() => navigate("/tours")}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-full
                            bg-[var(--primary)]
                            px-10
                            py-4
                            text-lg
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-2xl
                        "
                    >
                        Explore All Tours

                        <LuArrowRight
                            size={22}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-2
                            "
                        />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;