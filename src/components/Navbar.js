"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import NavLink from "./NavLink";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinksRef = useRef([]);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            gsap.fromTo(
                navLinksRef.current,
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );

            gsap.fromTo(
                rightSectionRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.6,
                }
            );
        }
    }, [menuOpen]);

    const navLinks = [
        { href: "/", label: "Homepage" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "/about", label: "About" },
    ];

    return (
        <>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 left-0 h-screen w-screen bg-black text-white flex items-center justify-center z-[9999]"
                    >
                        <div className="container flex justify-between">
                            <div className="flex-2 flex flex-col gap-5 items-center lg:items-stretch">
                                {navLinks.map((link, index) => (
                                    <div key={link.href} ref={(el) => (navLinksRef.current[index] = el)}>
                                        <NavLink href={link.href} onClick={() => setTimeout(() => setMenuOpen(false), 750)}>
                                            {link.label}
                                        </NavLink>
                                    </div>
                                ))}
                            </div>

                            <div className="flex-3 px-18 hidden lg:block" ref={rightSectionRef}>
                                <div>
                                    <h2 className="my-8 text-lg font-medium">Useful Links</h2>
                                    <div className="flex flex-col gap-2 text-base font-light text-white/50">
                                        <Link href="/" className="w-fit hover:text-violet-500 duration-300 ease-in-out">
                                            Privacy & Policy
                                        </Link>
                                        <Link href="/" className="w-fit hover:text-violet-500 duration-300 ease-in-out">
                                            Terms & Conditions
                                        </Link>
                                        <Link href="/" className="w-fit hover:text-violet-500 duration-300 ease-in-out">
                                            Cookie Policy
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-24">
                                    <h2 className="my-8 text-lg font-medium">India</h2>
                                    <p className="text-white/50">
                                        1002, 1002, Near Sector-6, Gandhinagar, <br />
                                        Gujarat, India, 382006
                                    </p>
                                    <p className="text-white/50">+91 9875111723</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className="fixed w-screen top-0 z-[9999] bg-[#111111EE] xl:mix-blend-difference xl:bg-transparent">
                <div className="flex justify-between py-8 xl:py-12 relative z-[9999] max-w-[1800px] w-[90%] mx-auto">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-5xl font-medium text-white">
                        {menuOpen ? "MD." : "MD"}
                    </Link>
                    <div className="cursor-pointer w-[60px] h-[40px] flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg viewBox="0 0 60 40" className="w-[60px] h-[40px]">
                            <g stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M10,10 L40,10"
                                    className={`origin-center transition-all duration-500 ease-in-out ${
                                        menuOpen ? "translate-y-[10.5px] rotate-[45deg]" : "translate-y-0 rotate-0"
                                    }`}
                                />
                                <path
                                    d="M10,20 L40,20"
                                    className={`origin-center transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`}
                                />
                                <path
                                    d="M10,30 L40,30"
                                    className={`origin-center transition-all duration-500 ease-in-out ${
                                        menuOpen ? "-translate-y-[10.5px] rotate-[-45deg]" : "translate-y-0 rotate-0"
                                    }`}
                                />
                            </g>
                        </svg>
                    </div>  
                </div>
            </nav>
        </>
    );
};

export default Navbar;
