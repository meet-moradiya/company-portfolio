import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export async function getAllBlogs() {
    await connectDB();
    return Blog.find().sort({ createdAt: -1 });
}

export async function getBlogBySlug(slug) {
    await connectDB();
    return Blog.findOne({ slug });
}

export async function createBlog(data) {
    await connectDB();
    return Blog.create(data);
}

export async function updateBlog(id, data) {
    await connectDB();
    return Blog.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteBlog(id) {
    await connectDB();
    return Blog.findByIdAndDelete(id);
}
