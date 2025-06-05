"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const PageTransition = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayChildren, setDisplayChildren] = useState(children);
    const pathname = usePathname();
    const router = useRouter();
    const overlayRef = useRef(null);
    const loaderRef = useRef(null);
    const previousPathname = useRef(pathname);

    // Handle route changes
    useEffect(() => {
        if (pathname !== previousPathname.current) {
            handleRouteChange();
            previousPathname.current = pathname;
        }
    }, [pathname]);

    const handleRouteChange = async () => {
        setIsTransitioning(true);
        
        // Animate out current content
        await animateOut();
        
        // Update content
        setDisplayChildren(children);
        
        // Small delay to ensure content is updated
        await new Promise(resolve => setTimeout(resolve, 50));
        
        // Animate in new content
        await animateIn();
        
        setIsTransitioning(false);
    };

    const animateOut = () => {
        return new Promise((resolve) => {
            const tl = gsap.timeline({
                onComplete: resolve
            });

            // Hide current content
            tl.to("#smooth-content", {
                opacity: 0,
                y: 50,
                duration: 0.4,
                ease: "power2.inOut"
            });

            // Show loader overlay
            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.2");

            // Animate loader elements
            tl.fromTo(loaderRef.current.children, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.1");
        });
    };

    const animateIn = () => {
        return new Promise((resolve) => {
            const tl = gsap.timeline({
                onComplete: resolve
            });

            // Hide loader elements
            tl.to(loaderRef.current.children, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.in"
            });

            // Hide overlay
            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut"
            }, "-=0.1");

            // Show new content
            tl.to("#smooth-content", {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.2");

            // Re-trigger scroll animations for new content
            tl.call(() => {
                // Reset GSAP ScrollTrigger for new content
                if (typeof window !== 'undefined' && window.ScrollTrigger) {
                    window.ScrollTrigger.refresh();
                }
            });
        });
    };

    return (
        <>
            {displayChildren}
            
            {/* Transition Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[99999] pointer-events-none opacity-0"
                style={{
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                        linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)
                    `
                }}
            >
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Loader Content */}
                <div className="flex flex-col items-center justify-center h-full">
                    <div ref={loaderRef} className="flex flex-col items-center gap-8">
                        {/* Logo Animation */}
                        <div className="relative">
                            <div className="text-6xl font-bold">
                                <span
                                    className="bg-gradient-to-r from-violet-500 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                                    style={{
                                        backgroundSize: "200% 200%",
                                        animation: "gradient-x 2s ease infinite",
                                    }}
                                >
                                    MD
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-pink-400/20 to-blue-400/20 blur-xl animate-pulse" />
                        </div>

                        {/* Loading Dots */}
                        <div className="flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 rounded-full bg-violet-500"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            className="text-white/70 text-sm font-light tracking-wider uppercase"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            Loading Experience...
                        </motion.p>

                        {/* Progress Bar */}
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
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

export default PageTransition;