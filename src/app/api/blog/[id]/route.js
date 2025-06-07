import { NextResponse } from "next/server";
import { getBlogBySlug, updateBlog, deleteBlog } from "@/lib/blogService";

export async function GET(req, context) {
    const { id } = context.params;
    const blog = await getBlogBySlug(id);
    return NextResponse.json(blog);
}

export async function PUT(req, context) {
    const { id } = context.params;
    const body = await req.json();
    const updatedBlog = await updateBlog(id, body);
    return NextResponse.json(updatedBlog);
}

export async function DELETE(req, context) {
    const { id } = context.params;
    await deleteBlog(id);
    return NextResponse.json({ message: "Blog deleted" });
}
