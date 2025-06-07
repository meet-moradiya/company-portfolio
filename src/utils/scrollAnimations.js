import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function animateMilUp() {
    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: 40,
                scale: 0.98,
                ease: "sine",
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: "play none none reverse",
                },
            }
        );
    });
}

export function animateMilScale() {
    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        const value1 = parseFloat(section.dataset.value1);
        const value2 = parseFloat(section.dataset.value2);

        gsap.fromTo(
            section,
            {
                scale: value1,
                ease: "sine",
            },
            {
                scale: value2,
                ease: "sine",
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
            }
        );
    });
}

export function animateMilParallax() {
    const parallaxImage = document.querySelectorAll(".mil-parallax");

    if (typeof window !== "undefined" && window.innerWidth > 960) {
        parallaxImage.forEach((section) => {
            const value1 = parseFloat(section.dataset.value1);
            const value2 = parseFloat(section.dataset.value2);

            gsap.fromTo(
                section,
                {
                    y: value1,
                    ease: "sine",
                },
                {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }
}

export function animateMilRotate() {
    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        const value = parseFloat(section.dataset.value);

        gsap.fromTo(
            section,
            {
                rotate: 0,
                ease: "sine",
            },
            {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
            }
        );
    });
}

export function SmoothScroll() {
    if (typeof window === "undefined") return;

    if (!ScrollSmoother.get()) {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: true,
        });
    }
}

export function initScrollAnimations() {
    SmoothScroll();
    animateMilUp();
    animateMilScale();
    animateMilParallax();
    animateMilRotate();
}
