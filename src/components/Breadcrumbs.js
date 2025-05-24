"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = ({ background = "white", customclass = "" }) => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    const crumbs = segments.map((segment, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");
        const label = segment.replace(/-/g, " ").toUpperCase();

        return {
            href,
            label,
        };
    });

    const isDark = background === "black";
    const bgClass = isDark ? "bg-black text-white" : "bg-white text-black";
    const linkColor = isDark ? "hover:text-violet-300" : "hover:text-violet-500";

    return (
        <nav className={`py-12 border-b border-neutral-200 hidden md:block ${bgClass} ${customclass}`}>
            <Link href="/" className={`p-2 ${linkColor} duration-300 ease-in-out`}>
                HOMEPAGE
            </Link>

            {crumbs.map((crumb, idx) => (
                <span key={crumb.href} className="py-2">
                    <span className="mx-2 p-2">/</span>
                    {idx === crumbs.length - 1 ? (
                        <span className="text-neutral-500">{crumb.label}</span>
                    ) : (
                        <Link href={crumb.href} className={`p-2 ${linkColor} duration-300 ease-in-out`}>
                            {crumb.label}
                        </Link>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
