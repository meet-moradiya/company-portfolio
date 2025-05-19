"use client";

import { usePathname } from "next/navigation";

const CurrentPage = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return <span className="fixed bottom-25 left-12 z-999 text-sm font-medium uppercase tracking-widest -rotate-90">{segments[0]}</span>;
};

export default CurrentPage;
