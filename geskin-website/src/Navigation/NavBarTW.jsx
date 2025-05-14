import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './NavBarTW.css';
import { useState } from 'react';
import logo from "../assets/logo.jpg";

const navigation = [
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBarTW() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 w-screen left-0 fixed top-0 z-50">
            <div className="px-4">
                <div className="relative flex h-12 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}  // Toggle the menu when clicked
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Open icon */}
                            <Bars3Icon
                                className={`block ${isOpen ? 'hidden' : 'block size-6'}`}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </Bars3Icon>
                            {/* Close icon */}
                            <XMarkIcon
                                className={`block ${isOpen ? 'block size-6' : 'hidden'}`}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </XMarkIcon >
                        </button>
                    </div>
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <a href="#intro"><img
                                alt="logo"
                                src={logo}
                                className="h-8 w-auto"
                            /></a>
                        </div>
                        {/* Navigation for desktop */}
                        <div className="hidden sm:flex items-center justify-between w-full">
                            {/* Left side: Brand and nav links */}
                            <div className="sm:ml-6 flex items-center space-x-4">
                                <a
                                    href="#intro"
                                    className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    EHRETZ GESKIN
                                </a>
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={`${item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            } rounded-md px-3 py-2 text-sm font-medium`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Right side: Resume link */}
                            <div className="ml-auto">
                                <a
                                    href="https://www.dropbox.com/scl/fi/4qa31hqhvxidhib61mblz/EhretzGeskinResume?rlkey=d1g9ih9ni0g1s6u8jxf8x7poa&st=6n8501cm&dl=0"
                                    target="_blank" rel="noopener noreferrer"
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                                >
                                    Resume
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={`${item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    } block rounded-md px-3 py-2 text-base font-medium`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="https://www.dropbox.com/scl/fi/uaawg9dbgb795pziyh055/EhretzGeskinResume_tech-1.pdf?rlkey=pynjx2legbghbkjcltq3kr3xn&st=7jas08r7&dl=0"
                            target="_blank" rel="noopener noreferrer"
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
