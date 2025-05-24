import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollTriggerInit from "@/components/ScrollTriggerInit";
import CurrentPage from "@/components/CurrentPage";
import BackToTop from "@/components/BackToTop";
import CustomScrollbar from "@/components/CustomScrollbar";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "My Website",
    description: "A beautifully crafted Next.js website with smooth scrolling.",
    keywords: ["Next.js", "GSAP", "Smooth Scroll", "Web Design"],
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CustomCursor />
                <CustomScrollbar />
                <ScrollTriggerInit />
                <div id="smooth-wrapper">
                    <CurrentPage />
                    <BackToTop />
                    <Navbar />
                    <div id="smooth-content">{children}</div>
                </div>
            </body>
        </html>
    );
}
