"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const InfiniteLogoScroller = ({ logos, speed = 100 }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const totalWidth = container.scrollWidth / 2;

        if (animationRef.current) {
            animationRef.current.kill();
        }

        animationRef.current = gsap.fromTo(
            container,
            { x: 0 },
            {
                x: -totalWidth,
                duration: totalWidth / speed,
                ease: "linear",
                repeat: -1,
            }
        );

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [logos, speed]);

    return (
        <div className="overflow-hidden w-full bg-transparent">
            <div className="flex w-max" ref={containerRef}>
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="mx-6 flex-shrink-0">
                        <img src={logo} alt={`Company logo ${index}`} className="h-24 w-auto object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteLogoScroller;
