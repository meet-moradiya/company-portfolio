import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(req, context) {
    const params = await context.params;
    await connectDB();
    const blog = await Blog.findOne({ slug: params.id });
    return NextResponse.json(blog);
}

export async function PUT(req, context) {
    const params = await context.params;
    await connectDB();
    const body = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(params.id, body, { new: true });
    return NextResponse.json(updatedBlog);
}

export async function DELETE(req, context) {
    const params = await context.params;
    await connectDB();
    await Blog.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Blog deleted" });
}
