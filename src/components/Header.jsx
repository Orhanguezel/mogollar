import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import Logo from "../assets/logo2/1.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Band Members", href: "/band-members", current: false },
  { name: "Albums", href: "/albums", current: false },
  { name: "Tracks", href: "/albums/1/tracks", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "History", href: "/history", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex h-40 items-center justify-center gap-1 lg:justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between lg:justify-center">
                {/* Animated Logo */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="flex flex-shrink-0 items-center"
                >
                  <CSSTransition in={true} timeout={500} classNames="fade">
                    <a href="/">
                      <img
                        className="h-28 w-auto hover:opacity-80 hover:cursor-pointer"
                        src={Logo}
                        alt="Mogollar-logo"
                      />
                    </a>
                  </CSSTransition>
                </motion.div>
                <div className="hidden sm:ml-6 sm:block lg:flex lg:justify-center">
                  <div className="flex space-x-4 lg:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm lg:text-base font-medium flex items-center justify-center"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-2 py-1 text-sm font-medium flex items-center justify-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
