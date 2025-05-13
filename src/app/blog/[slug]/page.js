import Breadcrumbs from "@/components/Breadcrumbs";

async function getBlog(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`, {
        cache: "no-store",
    });
    return res.json();
}

export default async function BlogDetailPage({ params }) {
    const blog = await getBlog(params.slug);

    if (!blog) return <div>Blog not found</div>;

    return (
        <div className="p-6">
            <Breadcrumbs />
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700">{blog.content}</p>
        </div>
    );
}
