import Image from "next/image";
import { DateFormat } from "@/lib/utility";
import Breadcrumbs from "@/components/Breadcrumbs";

async function getBlog(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`, {
        cache: "no-store",
    });
    return res.json();
}

export default async function BlogDetailPage(context) {
    const params = await context.params;
    const blog = await getBlog(params.slug);

    if (!blog)
        return (
            <div className="h-screen flex flex-col bg-[#F5F5FF]">
                <div className="h-[100px]">Company</div>
                <div className="flex-1 flex flex-col gap-4 justify-center items-center">
                    <Image src="/pagenotfound.svg" alt="Page Not Found" width={650} height={400} />
                    <h4 className="text-2xl sm:text-4xl font-medim text-center">This Page Does Not Exist</h4>
                    <p className="text-sm sm:text-xl font-light text-center">
                        Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
                    </p>
                </div>
            </div>
        );

    const publishedDate = DateFormat(blog.createdAt);

    return (
        <div>
            <div className="container flex flex-col justify-center overflow-hidden">
                <div className="flex justify-center items-center">
                    <Breadcrumbs />
                </div>
                <h1 className="text-6xl font-medium text-center my-32">{blog.title}</h1>
                <img
                    src={blog.images?.[0] || "/placeholder.jpg"}
                    alt={blog.title}
                    className="object-cover mil-scale"
                    data-value1="0.8"
                    data-value2="1.1"
                />
                <div className="mil-up flex justify-between py-12 border-b border-neutral-200">
                    <p className="uppercase text-neutral-500 tracking-widest text-sm">
                        category: <span className="text-black">{blog.category}</span>
                    </p>
                    <p className="uppercase text-neutral-500 tracking-widest text-sm">
                        date: <span className="text-black">{publishedDate}</span>
                    </p>
                    <p className="uppercase text-neutral-500 tracking-widest text-sm">
                        author: <span className="text-black">{blog.author}</span>
                    </p>
                </div>
                <p className="mil-up max-w-[1000px] text-xl font-light mx-auto my-18">{blog.content}</p>
            </div>
        </div>
    );
}
