"use client";

import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[99999]">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 backdrop-blur-sm"
                style={{
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%),
                        rgba(12, 12, 28, 0.7)
                    `
                }}
            />
            
            {/* Loading Spinner */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <div className="relative">
                    <motion.div
                        className="h-16 w-16 rounded-full border-4 border-violet-500/30"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full border-4 border-t-4 border-violet-500"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
