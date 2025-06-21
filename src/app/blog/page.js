import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/blogService";
import ScrollAnimations from "@/components/ScrollAnimations";

export default async function BlogListPage() {
    let blogs = await getAllBlogs();

    return (
        <div className="bg-white py-34">
            <ScrollAnimations />
            <Breadcrumbs customclass="container" />
            <header className="container !my-18">
                <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight lg:text-left">
                    Bright
                    <span className="font-thin mx-6">Ideas &</span>
                    <br />
                    Bold
                    <span className="font-thin mx-6">Stories</span>
                </h1>
            </header>
            <div className="container space-y-18">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
