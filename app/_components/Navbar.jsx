"use client";
import React from 'react'
import { motion } from "framer-motion"
import { Button } from "/components/ui/button"
import { SignInButton, useUser, UserButton } from '@clerk/nextjs'

const navigation = [
  { name: 'Home', href: '/#' },
  { name: 'Products', href: '#' },
  { name: 'Categories', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact Us', href: '#' },

]

function Navbar(params) {
  const { user, isSignedIn } = useUser();

  return (
    <div >
      <motion.nav initial={{ opacity: 0, y: '10' }}
        animate={{ opacity: 1, x: 0 }} variants={{
          hidden: {
            y: 100,
            opacity: 0
          },
          visible: {
            y: .1,
            opacity: 1,
            transition: {
              delay: .4,
            }
          },
        }}>
        <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          {/* <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}> */}
          <div className="hidden lg:flex lg:gap-x-12  justify-center">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
                {item.name}
              </a>
            ))}
          </div>
          {/* </motion.div> */}

          <div className=" lg:flex lg:flex-1 lg:justify-end justify-center">
            {isSignedIn ? <UserButton /> : <div className=" lg:flex lg:flex-1 lg:justify-end justify-center">
              <SignInButton mode='modal'>
                <Button variant="outline">Log In</Button>
              </SignInButton>
            </div>
            }
          </div>

          {/* {isSignedIn ?
            <div className="lg:flex lg:flex-1 lg:justify-end justify-center">
              <UserButton />

            </div>
            : <div>
              <SignInButton mode='modal'>
                <Button variant="outline">Log In</Button>
              </SignInButton>
            </div>
          } */}

        </nav>
      </motion.nav>
      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                  <div className="fixed inset-0 z-50" />
                  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </a>
                      <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Dialog> */}
    </div >
  )
}

export default Navbar