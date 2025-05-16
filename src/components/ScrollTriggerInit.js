"use client";

import { initScrollAnimations } from "@/lib/scrollAnimations";
import { useEffect } from "react";

export default function ScrollTriggerInit() {
    useEffect(() => {
        initScrollAnimations();
    }, []);

    return null;
}
