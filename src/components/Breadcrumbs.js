"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
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

    return (
        <nav className="py-12 border-b-1 border-neutral-200">
            <Link href="/" className="p-2 hover:text-amber-500 duration-300 ease-in-out">
                HOMEPAGE
            </Link>

            {crumbs.map((crumb, idx) => (
                <span key={crumb.href} className="py-2">
                    <span className="mx-2 p-2">/</span>
                    {idx === crumbs.length - 1 ? (
                        <span className="text-neutral-500">{crumb.label}</span>
                    ) : (
                        <Link href={crumb.href} className="p-2 hover:text-amber-500 duration-300 ease-in-out">
                            {crumb.label}
                        </Link>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
