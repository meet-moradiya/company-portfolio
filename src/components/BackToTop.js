"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomLinkButton from "./CustomLinkButton";

gsap.registerPlugin(ScrollTrigger);

export default function BackToTop() {
    const buttonRef = useRef(null);

    useEffect(() => {
        const btt = buttonRef.current;

        gsap.set(btt, {
            x: -30,
            opacity: 0,
        });

        gsap.to(btt, {
            x: 0,
            opacity: 1,
            ease: "sine",
            scrollTrigger: {
                trigger: "body",
                start: "top -40%",
                end: "top -40%",
                toggleActions: "play none reverse none",
            },
        });
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-25 right-5 z-999 -rotate-90">
            <a href="#" ref={buttonRef} onClick={scrollToTop} className="inline-block px-4 py-2 text-sm font-lighter uppercase tracking-widest">
                <CustomLinkButton text="back to top" />
            </a>
        </div>
    );
}
