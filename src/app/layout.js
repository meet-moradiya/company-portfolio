import "../styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollTriggerInit from "@/components/ScrollTriggerInit";
import CurrentPage from "@/components/CurrentPage";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CustomCursor />
                <ScrollTriggerInit />
                <CurrentPage />
                <BackToTop />
                <div id="smooth-wrapper">
                    <div id="smooth-content">{children}</div>
                </div>
            </body>
        </html>
    );
}
