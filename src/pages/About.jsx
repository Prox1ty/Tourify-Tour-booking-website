import React from "react";
import { Link } from "react-router-dom";
import {
    LuGlobe,
    LuCompass,
    LuShieldCheck,
    LuHeartHandshake,
    LuArrowRight,
} from "react-icons/lu";

function About() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="relative overflow-hidden py-28">
                <div className="mx-auto max-w-6xl px-6 text-center">

                    <p className="mb-4 text-lg font-semibold text-[var(--primary)]">
                        About Tourify
                    </p>

                    <h1 className="mx-auto max-w-4xl text-6xl font-black leading-tight text-[var(--text)]">
                        Travel isn't about places.
                        <br />
                        It's about unforgettable experiences.
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[var(--text-muted)]">
                        Tourify helps travelers discover incredible adventures,
                        compare experiences, and find the perfect destination
                        for their next journey—all in one beautiful place.
                    </p>

                </div>
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

                    <div>
                        <h2 className="mb-6 text-4xl font-black text-[var(--text)]">
                            Our Story
                        </h2>

                        <p className="mb-6 leading-8 text-[var(--text-muted)]">
                            Tourify was created with one goal in mind:
                            making travel planning simple, inspiring,
                            and enjoyable.
                        </p>

                        <p className="mb-6 leading-8 text-[var(--text-muted)]">
                            Whether you're searching for breathtaking mountain
                            adventures, relaxing beaches, historic cities,
                            or once-in-a-lifetime cultural experiences,
                            Tourify brings everything together in one place.
                        </p>

                        <p className="leading-8 text-[var(--text-muted)]">
                            We believe everyone deserves to discover the world,
                            and finding your next adventure should be just as
                            exciting as the trip itself.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-[var(--surface)] p-10 shadow-xl">
                        <div className="grid grid-cols-2 gap-8">

                            <div>
                                <h3 className="text-5xl font-black text-[var(--primary)]">
                                    500+
                                </h3>
                                <p className="mt-2 text-[var(--text-muted)]">
                                    Tours Available
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-black text-[var(--primary)]">
                                    60+
                                </h3>
                                <p className="mt-2 text-[var(--text-muted)]">
                                    Destinations
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-black text-[var(--primary)]">
                                    25K+
                                </h3>
                                <p className="mt-2 text-[var(--text-muted)]">
                                    Happy Travelers
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-black text-[var(--primary)]">
                                    4.9★
                                </h3>
                                <p className="mt-2 text-[var(--text-muted)]">
                                    Average Rating
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Values */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="mb-16 text-center text-5xl font-black text-[var(--text)]">
                        What We Believe
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-3xl bg-[var(--surface)] p-8 shadow-lg transition hover:-translate-y-2">
                            <LuCompass
                                size={42}
                                className="mb-6 text-[var(--primary)]"
                            />

                            <h3 className="mb-3 text-2xl font-bold text-[var(--text)]">
                                Adventure
                            </h3>

                            <p className="leading-7 text-[var(--text-muted)]">
                                Every trip should inspire curiosity and create
                                unforgettable memories.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--surface)] p-8 shadow-lg transition hover:-translate-y-2">
                            <LuGlobe
                                size={42}
                                className="mb-6 text-[var(--primary)]"
                            />

                            <h3 className="mb-3 text-2xl font-bold text-[var(--text)]">
                                Exploration
                            </h3>

                            <p className="leading-7 text-[var(--text-muted)]">
                                Discover cultures, landscapes,
                                and experiences from around the world.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--surface)] p-8 shadow-lg transition hover:-translate-y-2">
                            <LuShieldCheck
                                size={42}
                                className="mb-6 text-[var(--primary)]"
                            />

                            <h3 className="mb-3 text-2xl font-bold text-[var(--text)]">
                                Trust
                            </h3>

                            <p className="leading-7 text-[var(--text-muted)]">
                                Carefully selected experiences with
                                transparent information you can rely on.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--surface)] p-8 shadow-lg transition hover:-translate-y-2">
                            <LuHeartHandshake
                                size={42}
                                className="mb-6 text-[var(--primary)]"
                            />

                            <h3 className="mb-3 text-2xl font-bold text-[var(--text)]">
                                Community
                            </h3>

                            <p className="leading-7 text-[var(--text-muted)]">
                                Connecting travelers with experiences
                                they'll remember for a lifetime.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="pb-28">
                <div className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--surface)] px-8 py-16 text-center shadow-xl">

                    <h2 className="text-5xl font-black text-[var(--text)]">
                        Ready for your next adventure?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                        Browse hundreds of incredible destinations and
                        discover the perfect trip for your next vacation.
                    </p>

                    <Link
                        to="/tours"
                        className="
                            mx-auto
                            mt-10
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-[var(--primary)]
                            px-8
                            py-4
                            text-lg
                            font-semibold
                            text-white
                            transition-all
                            hover:gap-5
                            hover:brightness-110
                        "
                    >
                        Explore Tours
                        <LuArrowRight />
                    </Link>

                </div>
            </section>

        </main>
    );
}

export default About;