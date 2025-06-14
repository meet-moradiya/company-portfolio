"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import NavLink from "./NavLink";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinksRef = useRef([]);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                { x: -50, opacity: 0, scale: 0.8 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    delay: 0.3,
                }
            );

            gsap.fromTo(
                rightSectionRef.current,
                { y: 50, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.4)",
                    delay: 0.8,
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
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 left-0 h-screen w-screen z-[9999] overflow-hidden"
                        style={{
                            background: `
                                radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
                                linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)
                            `,
                        }}
                    >
                        {/* Animated background particles */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="container flex justify-between items-center h-full relative z-10">
                            <div className="flex-2 flex flex-col gap-8 items-center lg:items-stretch">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        ref={(el) => (navLinksRef.current[index] = el)}
                                        whileHover={{ scale: 1.05, x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <NavLink
                                            href={link.href}
                                            onClick={() => setTimeout(() => setMenuOpen(false), 750)}
                                            className="relative z-10 text-white/90 hover:text-white transition-colors duration-300"
                                        >
                                            {link.label}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                className="flex-3 px-18 hidden lg:block"
                                ref={rightSectionRef}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {/* Useful Links Section */}
                                <div className="mb-16">
                                    <h2 className="text-xl font-semibold mb-6" style={{ color: "oklch(60.6% .25 292.717)" }}>
                                        Useful Links
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {["Privacy & Policy", "Terms & Conditions", "Cookie Policy"].map((linkText, i) => (
                                            <motion.div key={i} whileHover={{ x: 8 }} className="group">
                                                <Link
                                                    href="/"
                                                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 text-base group-hover:gap-3"
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                                        style={{ backgroundColor: "oklch(60.6% .25 292.717)" }}
                                                    />
                                                    <span className="relative">
                                                        {linkText}
                                                        <span
                                                            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                                                            style={{ backgroundColor: "oklch(60.6% .25 292.717)" }}
                                                        />
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                {/* Address Section */}
                                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "oklch(60.6% .25 292.717)" }} />
                                        <h2 className="text-xl font-semibold text-white">Our Location</h2>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-medium mb-2" style={{ color: "oklch(60.6% .25 292.717)" }}>
                                                India Office
                                            </h3>
                                            <p className="text-white/80 leading-relaxed">
                                                1002, 1002, Near Sector-6,
                                                <br />
                                                Gandhinagar, Gujarat
                                                <br />
                                                India, 382006
                                            </p>
                                        </div>
                                        <div className="pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-3">
                                                <svg
                                                    className="w-4 h-4"
                                                    style={{ color: "oklch(60.6% .25 292.717)" }}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                                <span className="text-white/90 font-medium">+91 9875111723</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* Close button */}
                        <motion.button
                            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.nav
                className={`fixed w-screen top-0 z-[9999] transition-all duration-500 backdrop-blur-md`}
                style={{
                    background:
                        scrolled || menuOpen
                            ? `linear-gradient(135deg, 
                            rgba(17, 17, 17, 0.9) 0%, 
                            rgba(30, 30, 60, 0.8) 50%, 
                            rgba(17, 17, 17, 0.9) 100%)`
                            : "transparent",
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex justify-between items-center py-6 xl:py-8 relative z-[9999] max-w-[1800px] w-[90%] mx-auto">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-4xl xl:text-5xl font-bold relative group">
                            <span
                                className="bg-gradient-to-r from-violet-500 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x"
                                style={{
                                    backgroundSize: "200% 200%",
                                    animation: "gradient-x 3s ease infinite",
                                }}
                            >
                                {menuOpen ? "MD." : "MD"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-pink-400/20 to-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </motion.div>
                    <div
                        className="w-[40px] h-[24px] flex flex-col justify-between items-center cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-full h-[4px] rounded-full bg-gradient-to-r from-violet-500 via-pink-400 to-blue-500 animate-gradient-x"
                                initial={false}
                                animate={
                                    menuOpen
                                        ? i === 0
                                            ? { rotate: 45, y: 10 }
                                            : i === 1
                                            ? { opacity: 0 }
                                            : { rotate: -45, y: -10 }
                                        : { rotate: 0, y: 0, opacity: 1 }
                                }
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.nav>

            <style jsx>{`
                @keyframes gradient-x {
                    0%,
                    100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
