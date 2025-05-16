import Link from "next/link";

export default function Home() {
    return (
        <div className="text-center my-32">
            <Link className="mil-more" href="/blog">Blog</Link>
        </div>
    );
}
