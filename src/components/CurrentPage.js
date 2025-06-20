"use client";

import { usePathname } from "next/navigation";

const CurrentPage = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <span className="fixed bottom-25 left-10 z-[9] text-sm font-medium uppercase tracking-widest -rotate-90 mix-blend-difference text-white pointer-events-none hidden xl:block">
            {segments[0] || "homepage"}
        </span>
    );
};

export default CurrentPage;
