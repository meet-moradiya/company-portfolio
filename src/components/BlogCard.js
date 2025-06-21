"use client";

import Link from "next/link";
import { DateFormat } from "@/utils/utility";
import CustomLinkButton from "./CustomLinkButton";

export default function BlogCard({ blog }) {
    const publishedDate = DateFormat(blog.createdAt);
    return (
        <Link href={`/blog/${blog.slug}`} className="mil-more border-t-1 border-neutral-200 pt-18 group/card flex flex-col md:flex-row gap-8">
            <div className="md:w-[45%]">
                <div className="mil-up w-full h-84 overflow-hidden">
                    <img
                        src={blog.images?.[0] || "/placeholder.jpg"}
                        alt={blog.title}
                        className="object-cover h-full w-full duration-700 ease-in-out group-hover/card:scale-105"
                    />
                </div>
            </div>

            <div className="md:w-[55%] flex flex-col justify-between py-8">
                <div className="mil-up text-xs uppercase font-medium tracking-widest mb-2">
                    <span className="text-violet-500">{blog.category}</span> &nbsp; • &nbsp; {publishedDate}
                </div>
                <h2 className="mil-up text-2xl font-medium">{blog.title}</h2>
                <p className="mil-up text-neutral-500 font-light line-clamp-3">{blog.content.replace(/<[^>]+>/g, "")}</p>
                <CustomLinkButton text="read more" containerClassName="mil-up" />
            </div>
        </Link>
    );
}
