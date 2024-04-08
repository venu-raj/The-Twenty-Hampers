"use client"
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
}

const boxVariant = {
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0 }
      };


function Contact(params) {
        const [agreed, setAgreed] = useState(false)

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

                <section>
                        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                                <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
                                <div class="mx-auto max-w-lg text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right align-middle items-start">

                                                <h1 class="text-3xl  sm:text-4xl items-start">Join Our</h1>

                                                <h2 class="text-3xl font-bold sm:text-4xl">News Letter</h2>

                                                <p class="mt-4 text-gray-600">
                                                Receive exclusive deals, discounts and many offers.
                                                </p>
                                        </div>
                                        </motion.div>
                                        <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
                                        
                                        <div class="">
                                        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                First name
                                        </label>
                                        <div className="mt-2.5">
                                                <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                        </div>
                                </div>
                                <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Last name
                                        </label>
                                        <div className="mt-2.5">
                                                <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                        </div>
                                </div>
                                <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Company
                                        </label>
                                        <div className="mt-2.5">
                                                <input
                                                        type="text"
                                                        name="company"
                                                        id="company"
                                                        autoComplete="organization"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                        </div>
                                </div>
                                <div className="sm:col-span-2">
                                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Phone number
                                        </label>
                                        <div className="relative mt-2.5">
                                                <div className="absolute inset-y-0 left-0 flex items-center">
                                                        <label htmlFor="country" className="sr-only">
                                                                Country
                                                        </label>
                                                        <select
                                                                id="country"
                                                                name="country"
                                                                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                                        >
                                                                <option>IN</option>
                                                        </select>
                                                        <ChevronDownIcon
                                                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                                                aria-hidden="true"
                                                        />
                                                </div>
                                                <input
                                                        type="tel"
                                                        name="phone-number"
                                                        id="phone-number"
                                                        autoComplete="tel"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                        </div>
                                </div>
                                <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Message
                                        </label>
                                        <div className="mt-2.5">
                                                <textarea
                                                        name="message"
                                                        id="message"
                                                        rows={4}
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={''}
                                                />
                                        </div>
                                </div>

                        </div>
                        <div className="mt-10">
                                <button
                                        type="submit"
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                        Let's talk
                                </button>
                        </div>
                        
                </form>
                                        </div>
                                        </motion.div>
                                       
                                </div>
                                
                        </div>
                </section>
        )
}

export default Contact




//         < div className = "relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" >

               
// </ >
