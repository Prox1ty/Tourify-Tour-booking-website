import { motion } from "framer-motion";
import {
    LuMail,
    LuPhone,
    LuMapPin,
    LuClock3,
    LuSend,
} from "react-icons/lu";

function Contact() {
    return (
        <section className="w-full py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl font-black text-[var(--text)]">
                        Contact Us
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-muted)]">
                        Have a question about one of our tours or need help
                        planning your next adventure? We'd love to hear from
                        you.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Contact Information */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-[var(--surface)]
                            p-10
                            shadow-xl
                        "
                    >
                        <h2 className="mb-8 text-3xl font-bold text-[var(--text)]">
                            Get in touch
                        </h2>

                        <div className="space-y-8">

                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-[var(--primary)] p-3 text-white">
                                    <LuMail size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[var(--text)]">
                                        Email
                                    </h3>

                                    <p className="text-[var(--text-muted)]">
                                        support@tourify.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-[var(--primary)] p-3 text-white">
                                    <LuPhone size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[var(--text)]">
                                        Phone
                                    </h3>

                                    <p className="text-[var(--text-muted)]">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-[var(--primary)] p-3 text-white">
                                    <LuMapPin size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[var(--text)]">
                                        Office
                                    </h3>

                                    <p className="text-[var(--text-muted)]">
                                        123 Adventure Street
                                        <br />
                                        Travel City, World
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-[var(--primary)] p-3 text-white">
                                    <LuClock3 size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[var(--text)]">
                                        Working Hours
                                    </h3>

                                    <p className="text-[var(--text-muted)]">
                                        Monday - Friday
                                        <br />
                                        9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Contact Form */}

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-[var(--surface)]
                            p-10
                            shadow-xl
                            space-y-6
                        "
                    >
                        <h2 className="text-3xl font-bold text-[var(--text)]">
                            Send us a message
                        </h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-[var(--border)]
                                bg-[var(--surface-secondary)]
                                px-5
                                py-4
                                outline-none
                                transition
                                focus:border-[var(--primary)]
                            "
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-[var(--border)]
                                bg-[var(--surface-secondary)]
                                px-5
                                py-4
                                outline-none
                                transition
                                focus:border-[var(--primary)]
                            "
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message..."
                            className="
                                w-full
                                resize-none
                                rounded-xl
                                border
                                border-[var(--border)]
                                bg-[var(--surface-secondary)]
                                px-5
                                py-4
                                outline-none
                                transition
                                focus:border-[var(--primary)]
                            "
                        />

                        <button
                            type="submit"
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                bg-[var(--primary)]
                                px-8
                                py-4
                                font-semibold
                                text-white
                                transition
                                hover:gap-5
                                hover:brightness-110
                            "
                        >
                            Send Message
                            <LuSend />
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}

export default Contact;