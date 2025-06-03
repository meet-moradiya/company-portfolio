"use client";

import { createContext, useContext, useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const LoadingContext = createContext({
    isLoading: false,
    setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

// Separate component for route change detection
function RouteChangeListener({ setIsLoading }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setIsLoading(false);
    }, [pathname, searchParams, setIsLoading]);

    return null;
}

export default function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLoading]);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <Suspense fallback={null}>
                <RouteChangeListener setIsLoading={setIsLoading} />
            </Suspense>
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
