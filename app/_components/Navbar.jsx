"use client";
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "/components/ui/button"
import { SignInButton, useUser, UserButton } from '@clerk/nextjs'
import Landing from "./Landing"
import Exploree from './Explore'
import Featured from './Featured'
import Expediency from './Expediency'
import Footer from './Footer'
import Contact from "./Contact"
import { AiOutlineMenu } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { Dialog } from '@headlessui/react'
import { CgClose } from "react-icons/cg";

function Navbar(params) {
  const { user, isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const Home = useRef();
  const Products = useRef();
  const Categories = useRef();
  const ContactUs = useRef();
  const About = useRef();

  const handleScroll = (elmRef) => {
    // console.log(element);
    window.scrollTo(0, elmRef.current.offsetTop);
    // window.scrollTo({ top: document.documentElement.scrollBy.ref, behavior: "smooth" });
  }

  return (
    <div>
      <header className="">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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

            <TiShoppingCart size={30} className=' mx-2' aria-hidden="true" />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a onClick={() => handleScroll(Home)} className=" cursor-pointer shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
              Home
            </a>
            <a onClick={() => handleScroll(Products)} className="cursor-pointer  shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
              Products
            </a>
            <a onClick={() => handleScroll(Categories)} className="cursor-pointer  shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
              Benefits
            </a>
            <a onClick={() => handleScroll(ContactUs)} className="cursor-pointer  shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
              Contact Us
            </a>
            <a onClick={() => handleScroll(About)} className="cursor-pointer  shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
              About Us
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <TiShoppingCart size={35} style={{
              paddingRight: 8
            }} />


            {isSignedIn ?
              <UserButton />
              :
              <SignInButton mode='modal'>
                <Button variant="outline">Log In</Button>
              </SignInButton>
            }

            <div className=' lg:hidden cursor-pointer'>
              {/* <AiOutlineMenu size={35} style={{
                paddingLeft: 10
              }} onClick={toggleNavigation} /> */}

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineMenu size={35} aria-hidden="true" style={{
                  paddingLeft: 10,
                  cursor: "pointer.        "
                }} />
                <TiShoppingCart size={35} style={{
                  paddingRight: 8
                }} />
              </button>

            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CgClose color='black' className="h-6 w-9" aria-hidden="true" />
              </button>

            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  {isSignedIn ?
                    <div className=' flex align-middle items-center'>
                      <UserButton />
                      <h4 className=' ml-2'>
                        {user.fullName}
                      </h4>
                    </div>
                    :
                    <SignInButton mode='modal'>
                      <a
                        href="#"
                        className="px-9 -mx-3 block rounded-lg py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </SignInButton>
                  }

                </div>
                <div className="space-y-2 py-6">
                  <a onClick={() => {
                    handleScroll(Home)
                    setMobileMenuOpen(false)
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Home
                  </a>
                  <a onClick={() => {
                    handleScroll(Products)
                    setMobileMenuOpen(false)
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Products
                  </a>
                  <a onClick={() => {
                    handleScroll(Categories)
                    setMobileMenuOpen(false)
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Benefits
                  </a>
                  <a onClick={() => {
                    handleScroll(ContactUs)
                    setMobileMenuOpen(false)
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Contact Us
                  </a>
                  <a onClick={() => {
                    handleScroll(About);
                    setMobileMenuOpen(false)
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div div ref={Home} >
        <Landing />
      </div >
      <div ref={Products}>
        <Exploree />
      </div>
      <div ref={Categories}>
        <Expediency />
      </div>
      <div ref={ContactUs}>
        <Contact />
      </div>
      <div ref={About}>
        <Footer />
      </div>
    </div >
  )
}

export default Navbar

// < div >
// <motion.nav initial={{ opacity: 0, y: '10' }}
//   animate={{ opacity: 1, x: 0 }} variants={{
//     hidden: {
//       y: 100,
//       opacity: 0
//     },
//     visible: {
//       y: .1,
//       opacity: 1,
//       transition: {
//         delay: .4,
//       }
//     },
//   }}>
//   <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//     <div className="flex lg:flex-1">
//       <a href="#" className="-m-1.5 p-1.5">
//         <span className="sr-only">Your Company</span>
//         <img
//           className="h-8 w-auto"
//           src="/logo.png"
//           alt=""
//         />
//       </a>
//     </div>
//     <div className="flex lg:hidden">
//       <button
//         type="button"
//         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//       >
//         <span className="sr-only">Open main menu</span>
//       </button>
//     </div>
//     <motion.div initial="hidden" animate="visible" variants={{
//       hidden: {
//         scale: .1,
//         opacity: 0
//       },
//       visible: {
//         scale: 1,
//         opacity: 1,
//         transition: {
//           delay: .2
//         }
//       },
//     }}>
//       <div className="hidden lg:flex lg:gap-x-12  justify-center" >
// <a onClick={() => handleScroll(Home)} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
//   Home
// </a>
// <a onClick={() => handleScroll(Products)} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
//   Products
// </a>
// <a onClick={() => handleScroll(Categories)} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
//   Benefits
// </a>
// <a onClick={() => handleScroll(ContactUs)} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
//   Contact Us
// </a>
// <a onClick={() => handleScroll(About)} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
//   About Us
// </a>



//       </div>
//     </motion.div>


//     <div className="flex lg:flex-1 lg:justify-end justify-center">
// <TiShoppingCart size={35} style={{
//   paddingRight: 8
// }} />


// {isSignedIn ?
//   <UserButton />
//   :
//   <SignInButton mode='modal'>
//     <Button variant="outline">Log In</Button>
//   </SignInButton>
// }

// <div className=' lg:hidden cursor-pointer'>
//   {/* <AiOutlineMenu size={35} style={{
//           paddingLeft: 10
//         }} onClick={toggleNavigation} /> */}

//   <button
//     type="button"
//     className="-m-2.5 rounded-md p-2.5 text-gray-700"
//     onClick={() => setMobileMenuOpen(false)}
//   >
//     <span className="sr-only">Close menu</span>
//     <AiOutlineMenu size={35} aria-hidden="true" style={{
//       paddingLeft: 10
//     }} />
//   </button>

// </div>

//     </div >
//   </nav >

//   <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//     <div className="fixed inset-0 z-50" />
//     <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//       <div className="flex items-center justify-between">
//         <a href="#" className="-m-1.5 p-1.5">
//           <span className="sr-only">Your Company</span>
//           <img
//             className="h-8 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt=""
//           />
//         </a>
//         <button
//           type="button"
//           className="-m-2.5 rounded-md p-2.5 text-gray-700"
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           <span className="sr-only">Close menu</span>
//         </button>
//       </div>
//       <div className="mt-6 flow-root">
//         <div className="-my-6 divide-y divide-gray-500/10">
//           <div className="space-y-2 py-6">

//           </div>
//           <div className="py-6">
//             <a
//               href="#"
//               className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//             >
//               Log in
//             </a>
//           </div>
//         </div>
//       </div>
//     </Dialog.Panel>
//   </Dialog>
// </motion.nav >
//     </ >