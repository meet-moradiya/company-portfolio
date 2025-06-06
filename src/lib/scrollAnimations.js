import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export const initScrollAnimations = () => {
    if (typeof window === "undefined") return;

    // Force scroll to top first
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Kill existing animations to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.kill();

    // Wait for DOM to be ready
    gsap.delayedCall(0.1, () => {
        // Initialize ScrollSmoother
        const newSmoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: true,
            ignoreMobileResize: true,
        });

        // Force scroll to top after smoother is created
        if (newSmoother) {
            newSmoother.scrollTop(0);
        }

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();

        // Initialize animations
        initFadeUpAnimations();
        initScaleAnimations();
        initParallaxAnimations();
    });
};

const initFadeUpAnimations = () => {
    // Animate elements with .mil-up class
    gsap.utils.toArray(".mil-up").forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 60,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });
};

const initScaleAnimations = () => {
    // Animate elements with .mil-scale class
    gsap.utils.toArray(".mil-scale").forEach((element) => {
        const value1 = element.getAttribute("data-value1") || "1";
        const value2 = element.getAttribute("data-value2") || "1.1";

        gsap.fromTo(
            element,
            {
                scale: parseFloat(value1),
            },
            {
                scale: parseFloat(value2),
                duration: 1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
    });
};

const initParallaxAnimations = () => {
    // Add parallax effect to background elements
    gsap.utils.toArray("[data-parallax]").forEach((element) => {
        const speed = element.getAttribute("data-parallax") || "0.5";
        
        gsap.fromTo(
            element,
            {
                y: 0,
            },
            {
                y: () => -(element.offsetHeight * parseFloat(speed)),
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    });
};

// Function to refresh animations after page transitions
export const refreshScrollAnimations = () => {
    if (typeof window === "undefined") return;
    
    gsap.delayedCall(0.2, () => {
        ScrollTrigger.refresh();
        
        // Re-initialize animations for new content
        initFadeUpAnimations();
        initScaleAnimations();
        initParallaxAnimations();
    });
};

// Clean up function
export const cleanupScrollAnimations = () => {
    if (typeof window === "undefined") return;
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.kill();
};