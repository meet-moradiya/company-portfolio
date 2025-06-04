import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollTriggerInit from "@/components/ScrollTriggerInit";
import CurrentPage from "@/components/CurrentPage";
import BackToTop from "@/components/BackToTop";
import CustomScrollbar from "@/components/CustomScrollbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Meet Moradiya",
    description: "Create Your Identity Online",
    keywords: ["Next.js", "GSAP", "Smooth Scroll", "Web Design"],
    authors: [{ name: "Meet Moradiya", url: "https://yourwebsite.com" }],
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
                        <div id="smooth-content">
                                {children}
                                <Footer />
                        </div>
                    </div>
            </body>
        </html>
    );
}
