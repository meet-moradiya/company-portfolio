"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const textEl = cursor.querySelector(".cursor-text");

        // Center the cursor
        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            backgroundColor: "#e5e5e5",
            scale: 1,
            opacity: 0.8,
        });

        // Follow the pointer
        const onPointerMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.35,
                ease: "sine.out",
            });
        };

        // Click shrink
        const onMouseDown = () => {
            gsap.to(cursor, {
                scale: 0.1,
                duration: 0.1,
                ease: "sine.out",
            });
        };

        // Click release
        const onMouseUp = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)",
            });
        };

        const onMouseLeave = () =>
            gsap.to(cursor, {
                opacity: 0,
                duration: 0.2,
            });

        // Hover effects
        const interactiveSelectors = [".mil-more"];
        const hideSelectors = ["a:not(.mil-more)", "input", "textarea"];

        const handleInteractiveHover = (e) => {
            if (interactiveSelectors.some((sel) => e.target.closest(sel))) {
                gsap.to(cursor, {
                    width: 90,
                    height: 90,
                    backgroundColor: "#000",
                    opacity: 1,
                    duration: 0.2,
                    ease: "sine.out",
                });
                gsap.to(textEl, { opacity: 1, duration: 0.2, ease: "sine.out" });
            } else if (hideSelectors.some((sel) => e.target.closest(sel))) {
                gsap.to(cursor, { scale: 0, duration: 0.2, ease: "sine.out" });
                gsap.to(textEl, { opacity: 0, duration: 0.2, ease: "sine.out" });
            } else {
                gsap.to(cursor, {
                    width: 20,
                    height: 20,
                    backgroundColor: "#e5e5e5",
                    opacity: 0.5,
                    scale: 1,
                    duration: 0.2,
                    ease: "sine.out",
                });
                gsap.to(textEl, { opacity: 0, duration: 0.2, ease: "sine.out" });
            }
        };

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mouseover", handleInteractiveHover);
        document.addEventListener("mouseleave", onMouseLeave);

        return () => {
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseover", handleInteractiveHover);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="mil-ball fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white text-sm font-light tracking-widest hidden xl:flex"
        >
            <span className="cursor-text opacity-0 transition-opacity duration-200">MORE</span>
        </div>
    );
};

export default CustomCursor;
