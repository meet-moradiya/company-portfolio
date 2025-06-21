"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const menuOverlayRef = useRef(null);
    const navRef = useRef(null);
    const navLinksRef = useRef([]);
    const rightSectionRef = useRef(null);
    const particlesRef = useRef([]);

    const [particlePositions] = useState(() =>
        Array.from({ length: 100 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        }))
    );

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
            particlesRef.current.forEach((particle, i) => {
                gsap.fromTo(
                    particle,
                    { y: 0, scale: 1, opacity: 0.1 },
                    {
                        y: -30 + Math.random() * 20,
                        scale: 1.2 + Math.random() * 0.6,
                        opacity: 0.7,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        duration: 2 + Math.random() * 1.5,
                        delay: Math.random() * 2,
                    }
                );
            });
        } else {
            particlesRef.current.forEach((particle) => {
                gsap.to(particle, {
                    opacity: 0,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    onComplete: () => gsap.killTweensOf(particle),
                });
            });
        }
    }, [menuOpen]);

    useEffect(() => {
        particlesRef.current = [];
    }, [menuOpen]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5,
            });
        });

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (menuOpen) {
                const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

                tl.set(menuOverlayRef.current, { opacity: 0, scale: 0.95 });

                tl.to(menuOverlayRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                });

                tl.fromTo(
                    navLinksRef.current,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                    },
                    "-=0.2"
                );

                tl.fromTo(
                    rightSectionRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );
            } else {
                gsap.to(menuOverlayRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(menuOverlayRef.current, { clearProps: "all" });
                    },
                });
            }
        });

        return () => ctx.revert();
    }, [menuOpen]);

    const navLinks = [
        { href: "/", label: "Homepage" },
        { href: "/project", label: "Project" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "/about", label: "About" },
    ];

    return (
        <>
            {menuOpen && (
                <div
                    ref={menuOverlayRef}
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
                        {particlePositions.map(({ left, top }, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white/20 rounded-full"
                                style={{ left, top }}
                                ref={(el) => (particlesRef.current[i] = el)}
                            />
                        ))}
                    </div>

                    {/* Menu Links */}
                    <div className="container flex justify-between items-center h-full relative">
                        <div ref={navLinksRef} className="flex-2 flex flex-col gap-8 items-center lg:items-stretch">
                            {navLinks.map((link) => (
                                <div key={link.href} className="relative group transition-transform duration-300 hover:translate-x-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-fit flex items-center gap-4 group">
                                        <Link
                                            href={link.href}
                                            onClick={() => setTimeout(() => setMenuOpen(false), 750)}
                                            className={`transition-all duration-400 text-2xl md:text-3xl lg:text-4xl font-medium transform group-hover:translate-x-0 lg:group-hover:translate-x-6 ${
                                                pathname === link.href ? "text-violet-500" : "text-white"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex-3 px-18 hidden lg:block" ref={rightSectionRef}>
                            <div className="mb-16">
                                <h2 className="text-xl font-semibold mb-6" style={{ color: "oklch(60.6% .25 292.717)" }}>
                                    Useful Links
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {["Privacy & Policy", "Terms & Conditions", "Cookie Policy"].map((linkText, i) => (
                                        <div key={i} className="group transition-all hover:translate-x-2">
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 text-base"
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
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            )}

            <nav
                ref={navRef}
                className={`fixed w-screen top-0 z-[9999] transition-[background,backdrop-filter] duration-500 backdrop-blur-md`}
                style={{
                    background:
                        scrolled || menuOpen
                            ? `linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(30, 30, 60, 0.8) 50%, rgba(17, 17, 17, 0.9) 100%)`
                            : "transparent",
                }}
            >
                <div className="flex justify-between items-center py-6 xl:py-8 max-w-[1800px] w-[90%] mx-auto">
                    <div className="group cursor-pointer">
                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-4xl xl:text-5xl font-bold relative">
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
                    </div>
                    <div
                        className="w-[40px] h-[24px] flex flex-col justify-between items-center cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`w-full h-[4px] rounded-full bg-gradient-to-r from-violet-500 via-pink-400 to-blue-500 animate-gradient-x transition-all duration-300 ${
                                    menuOpen
                                        ? i === 0
                                            ? "transform rotate-45 translate-y-2.5"
                                            : i === 1
                                            ? "opacity-0"
                                            : "transform -rotate-45 -translate-y-2.5"
                                        : ""
                                }`}
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </nav>

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
