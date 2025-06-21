import Image from "next/image";
import { DateFormat } from "@/utils/utility";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBlogBySlug } from "@/lib/blogService";
import ScrollAnimations from "@/components/ScrollAnimations";

export async function generateMetadata(context) {
    const { slug } = await context.params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "This blog post does not exist.",
        };
    }

    return {
        title: blog.meta?.title || blog.title,
        description: blog.meta?.description || blog.content?.slice(0, 150),
        keywords: blog.meta?.keywords || [],
        openGraph: {
            title: blog.meta?.title || blog.title,
            description: blog.meta?.description || blog.content?.slice(0, 150),
            images: blog.images?.[0] ? [blog.images[0]] : [],
        },
    };
}

export default async function BlogDetailPage(context) {
    const { slug } = await context.params;
    const blog = await getBlogBySlug(slug);

    if (!blog)
        return (
            <div className="h-screen flex flex-col bg-[#F5F5FF]">
                <div className="h-[100px]">Company</div>
                <div className="flex-1 flex flex-col gap-4 justify-center items-center">
                    <Image src="/pagenotfound.svg" alt="Page Not Found" width={650} height={400} />
                    <h4 className="text-2xl sm:text-4xl font-medim text-center">This Page Does Not Exist</h4>
                    <p className="text-sm sm:text-xl font-light text-center">{"Sorry, The page you're looking for can't be found."}</p>
                </div>
            </div>
        );

    const publishedDate = DateFormat(blog.createdAt);

    return (
        <div className="bg-white py-34">
            <ScrollAnimations />
            <div className="container flex flex-col justify-center overflow-hidden">
                <div className="flex justify-center items-center">
                    <Breadcrumbs />
                </div>
                <h1 className="text-2xl font-medium text-center my-12 sm:my-32 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{blog.title}</h1>
                <img
                    src={blog.images?.[0] || "/placeholder.jpg"}
                    alt={blog.title}
                    className="object-cover mil-scale"
                    data-value1="0.8"
                    data-value2="1.1"
                />
                <div className="mil-up flex flex-col sm:flex-row justify-between py-12 border-b border-neutral-200">
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
                <p className="mil-up max-w-[1000px] text-xl font-light mx-auto my-6 sm:my-18">{blog.content}</p>
            </div>
        </div>
    );
}
