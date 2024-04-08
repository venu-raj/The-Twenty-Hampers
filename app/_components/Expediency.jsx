"use client"
import { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variant = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
};

function Expediency(params) {

        // const [agreed, setAgreed] = useState(false)

        const control = useAnimation();
        const [ref, inView] = useInView();

        useEffect(() => {
                if (inView) {
                        control.start("visible");
                } else {
                        control.start("hidden");
                }
        }, [control, inView]);

        return (
                <section className=" bg-white text-black rounded-2xl">
                        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                                <div className="mx-auto max-w-lg text-center">
                                        <h2 className="text-3xl font-bold sm:text-4xl">Benefits for your expediency</h2>
                                </div>

                                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
                                        <motion.div
                                                className="box"
                                                ref={ref}
                                                variants={variant}
                                                initial="hidden"
                                                animate={control}
                                        >
                                                <a
                                                        className="block rounded-xl border border-slate-100 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/20"
                                                        href="#"
                                                >
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="size-10 text-indigo-600"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                        >
                                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                                <path
                                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                                />
                                                                <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.65 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                                />
                                                        </svg>

                                                        <h2 className="mt-4 text-xl font-bold text-black">Payment Method</h2>

                                                        <p className="mt-1 text-sm text-black">
                                                                We offer flexible payment, to make easier.
                                                        </p>
                                                </a>
                                        </motion.div>
                                        <motion.div
                                                className="box"
                                                ref={ref}
                                                variants={variant}
                                                initial="hidden"
                                                animate={control}
                                        >

                                                <a
                                                        className="block rounded-xl border border-slate-100 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/20"
                                                        href="#"
                                                >
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="size-10 text-indigo-600"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                        >
                                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                                <path
                                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                                />
                                                                <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                                />
                                                        </svg>

                                                        <h2 className="mt-4 text-xl font-bold text-black">Return policy</h2>

                                                        <p className="mt-1 text-sm text-black">
                                                                You can return a product
                                                                within 30 days.
                                                        </p>
                                                </a>

                                        </motion.div>
                                        <motion.div
                                                className="box"
                                                ref={ref}
                                                variants={variant}
                                                initial="hidden"
                                                animate={control}
                                        >

                                                <a
                                                        className="block rounded-xl border border-slate-100 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/20"
                                                        href="#"
                                                >
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="size-10 text-indigo-600"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                        >
                                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                                <path
                                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                                />
                                                                <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                                />
                                                        </svg>

                                                        <h2 className="mt-4 text-xl font-bold text-black">Customer Support</h2>

                                                        <p className="mt-1 text-sm text-black">
                                                                Our customer support
                                                                is 24/7.
                                                        </p>
                                                </a>
                                        </motion.div>
                                </div>

                                <div className="mt-12 text-center">
                                        <a
                                                href="#"
                                                className="inline-block rounded-lg bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                                        >
                                                Get Started Today
                                        </a>
                                </div>
                        </div>
                </section>
        )
}

export default Expediency