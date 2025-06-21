"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomScrollbar() {
    const thumbRef = useRef();

    useEffect(() => {
        const thumb = thumbRef.current;

        const setHeight = gsap.quickTo(thumb, "height", {
            duration: 0.5,
            ease: "power2.out",
        });

        const updateThumb = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollTop / docHeight;
            const maxThumbHeight = window.innerHeight;

            setHeight(scrollProgress * maxThumbHeight);
        };

        updateThumb();

        window.addEventListener("scroll", updateThumb);
        return () => window.removeEventListener("scroll", updateThumb);
    }, []);

    return (
        <div className="fixed top-0 right-0 w-1 h-screen bg-transparent z-[999] hidden lg:block">
            <div className="w-full h-0 bg-violet-500 origin-top" ref={thumbRef}></div>
        </div>
    );
}
