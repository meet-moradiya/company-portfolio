import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";

async function getBlogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
        cache: "no-store",
    });
    return res.json();
}

export default async function BlogListPage() {
    const blogs = await getBlogs();

    return (
        <div className="container">
            <Breadcrumbs />
            <header className="my-16">
                <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight lg:text-left">
                    Bright
                    <span className="font-thin mx-6">Ideas &</span>
                    <br />
                    Bold
                    <span className="font-thin mx-6">Stories</span>
                </h1>
            </header>
            <div className="space-y-18">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
