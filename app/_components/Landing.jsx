"use client";
import React from 'react'
import { motion } from "framer-motion"

function Landing(params) {

  return (
    <div className="relative overflow-hidden bg-white ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="sm:static sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: '-100vh' }}
            animate={{ opacity: 1, x: 0 }} variants={{
              hidden: {
                scale: .1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4,
                }
              },
            }}>
            <div className="sm:max-w-lg">

              <h1 className=" font-semibold tracking-tight text-gray-900 sm:text-6xl text-4xl">
                Exclusive Deals of Gifts Collections
              </h1>
              <p className="mt-4 text-x text-gray-500">
                Explore different categories. Find the best deals.
              </p>

            </div>

          </motion.div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}

              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <motion.div initial={{ opacity: 0, x: '100vh' }}
                    animate={{ opacity: 1, x: 0 }} variants={{
                      hidden: {
                        scale: .1,
                        opacity: 0
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: .4,
                        }
                      },
                    }}>
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="/image1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/iage6.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/image2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/image5.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/image4.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/image3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/image7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Landing