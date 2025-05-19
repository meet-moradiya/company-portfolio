"use client";

import { usePathname } from "next/navigation";

const CurrentPage = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <span className="fixed bottom-25 left-8 z-999 text-sm font-medium uppercase tracking-widest -rotate-90 mix-blend-difference text-white pointer-events-none hidden xl:block">
            {segments[0] || "homepage"}
        </span>
    );
};

export default CurrentPage;
