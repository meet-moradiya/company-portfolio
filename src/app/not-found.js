import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 py-16">
            <div className="max-w-[600px] mb-8">
                <Image src="/images/PageNotFound.svg" alt="Page not found" width={500} height={400} priority />
            </div>

            <h1 className="text-[2rem] mb-4">Oops! Page not found.</h1>
            <p className="text-[#666] mb-8">The page you’re looking for doesn’t exist or has been moved.</p>

            <Link href="/" className="text-[#0070f3] underline font-bold">
                ← Back to Home
            </Link>
        </div>
    );
}
