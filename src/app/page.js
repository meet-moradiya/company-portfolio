import Link from "next/link";

export default function Home() {
    return (
        <div>
            <section className="bg-white min-h-screen">
                <Link className="mil-more" href="/blog">
                    Blog
                </Link>
            </section>

            <section className="bg-black min-h-screen">
                section2
            </section>

            <section className="bg-white min-h-screen">
                section3
            </section>
        </div>
    );
}
