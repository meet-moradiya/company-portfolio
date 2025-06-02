"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLoading } from "./LoadingProvider";

const NavLink = ({ href, children, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const { setIsLoading } = useLoading();

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        setIsLoading(true);
    };

    return (
        <div className="w-fit flex items-center gap-4 group">
            <span
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hidden lg:block
                    ${
                        isActive
                            ? "translate-x-4 bg-violet-500 opacity-100"
                            : "bg-[#999999] -translate-x-4 opacity-0 group-hover:translate-x-4 group-hover:opacity-100"
                    }`}
            />
            <Link
                href={href}
                onClick={handleClick}
                className={`transition-all duration-400 text-2xl md:text-3xl lg:text-4xl font-medium transform ${
                    isActive ? "text-violet-500 translate-x-0 lg:translate-x-6" : "text-white group-hover:translate-x-0 lg:group-hover:translate-x-6"
                }`}
            >
                {children}
            </Link>
        </div>
    );
};

export default NavLink;
