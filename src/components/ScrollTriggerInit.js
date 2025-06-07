"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { initScrollAnimations } from "@/utils/scrollAnimations";

export default function ScrollTriggerInit() {
    useEffect(() => {
        initScrollAnimations();
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

            const smoother = ScrollSmoother.get();
            if (smoother) smoother.kill();
        };
    }, []);

    return null;
}
