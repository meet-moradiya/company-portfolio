"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const InfiniteLogoScroller = ({ logos, speed = 100 }) => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, [logos]);

    return (
        <div className="overflow-hidden w-full bg-transparent">
            <motion.div
                className="flex w-max mil-up"
                ref={containerRef}
                animate={{ x: [0, -width] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: width / speed,
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="mx-6 flex-shrink-0">
                        <Image height={100} width={100} src={logo} alt={`Company logo ${index}`} className="h-24 w-auto object-contain" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteLogoScroller;
