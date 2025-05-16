"use client";

import Link from "next/link";
import { DateFormat } from "@/lib/utility";

export default function BlogCard({ blog }) {
    const publishedDate = DateFormat(blog.createdAt)
    return (
        <Link href={`/blog/${blog.slug}`} className="mil-more border-t-1 border-neutral-200 pt-18 group/card flex flex-col md:flex-row gap-8">
            <div className="md:w-[45%]">
                <div className="w-full h-84 overflow-hidden">
                    <img
                        src={blog.images?.[0] || "/placeholder.jpg"}
                        alt={blog.title}
                        className="object-cover h-full w-full duration-700 ease-in-out group-hover/card:scale-105"
                    />
                </div>
            </div>

            <div className="md:w-[55%] flex flex-col justify-between py-8">
                <div className="text-xs uppercase font-medium tracking-widest mb-2">
                    <span className="text-amber-500">{blog.category}</span> &nbsp; • &nbsp; {publishedDate}
                </div>
                <h2 className="text-2xl font-medium">{blog.title}</h2>
                <p className="text-neutral-500 font-light line-clamp-3">{blog.content.replace(/<[^>]+>/g, "")}</p>
                <div className="flex items-center gap-4 group/readmore">
                    <span className="text-xs uppercase font-medium py-2 hover:text-amber-500 duration-300 ease-in-out tracking-widest">
                        Read More
                    </span>
                    <span className="p-2 bg-neutral-200 rounded-full transition-transform duration-400 ease-in-out group-hover/readmore:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
