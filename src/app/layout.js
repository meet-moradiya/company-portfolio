import CustomCursor from "@/components/CustomCursor";
import "../styles/globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
