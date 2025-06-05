"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
import gsap from "gsap";

export const useSmoothNavigation = () => {
    const router = useRouter();
    const isNavigating = useRef(false);

    const navigateWithTransition = useCallback(async (href) => {
        // Prevent multiple simultaneous navigations
        if (isNavigating.current) return;
        
        // Don't animate if it's the same page
        if (window.location.pathname === href) return;
        
        isNavigating.current = true;

        try {
            // Pre-animate out effect
            await gsap.to("#smooth-content", {
                opacity: 0.7,
                scale: 0.98,
                duration: 0.2,
                ease: "power2.out"
            });

            // Navigate to new route
            router.push(href);
            
            // The PageTransition component will handle the rest
            
        } catch (error) {
            console.error("Navigation error:", error);
            // Reset on error
            gsap.to("#smooth-content", {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        } finally {
            // Reset navigation flag after a delay
            setTimeout(() => {
                isNavigating.current = false;
            }, 1000);
        }
    }, [router]);

    const prefetchRoute = useCallback((href) => {
        // Prefetch the route for better performance
        router.prefetch(href);
    }, [router]);

    return {
        navigateWithTransition,
        prefetchRoute,
        isNavigating: isNavigating.current
    };
};