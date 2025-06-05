import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollTriggerInit from "@/components/ScrollTriggerInit";
import CurrentPage from "@/components/CurrentPage";
import BackToTop from "@/components/BackToTop";
import CustomScrollbar from "@/components/CustomScrollbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

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
                    <PageTransition>
                        <div id="smooth-content">
                            {children}
                            <Footer />
                        </div>
                    </PageTransition>
                </div>
            </body>
        </html>
    );
}