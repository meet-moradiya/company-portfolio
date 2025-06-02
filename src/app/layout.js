import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollTriggerInit from "@/components/ScrollTriggerInit";
import CurrentPage from "@/components/CurrentPage";
import BackToTop from "@/components/BackToTop";
import CustomScrollbar from "@/components/CustomScrollbar";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD
import LoadingProvider from "@/components/LoadingProvider";
=======
import Footer from "@/components/Footer";
>>>>>>> 0f41d5e (navbar's hamburger line fixed and footer added)

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
<<<<<<< HEAD
                <LoadingProvider>
                    <CustomCursor />
                    <CustomScrollbar />
                    <ScrollTriggerInit />
                    <div id="smooth-wrapper">
                        <CurrentPage />
                        <BackToTop />
                        <Navbar />
                        <div id="smooth-content">{children}</div>
                    </div>
                </LoadingProvider>
=======
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
>>>>>>> 0f41d5e (navbar's hamburger line fixed and footer added)
            </body>
        </html>
    );
}
