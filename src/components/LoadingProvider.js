"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const LoadingContext = createContext({
    isLoading: false,
    setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setIsLoading(false);
    }, [pathname, searchParams]);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLoading]);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && <LoadingScreen />}
            <div style={{ 
                opacity: isLoading ? 0.3 : 1, 
                transition: "opacity 0.3s",
                pointerEvents: isLoading ? 'none' : 'auto'
            }}>
                {children}
            </div>
        </LoadingContext.Provider>
    );
}
