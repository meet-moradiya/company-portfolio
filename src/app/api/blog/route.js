import { NextResponse } from "next/server";
import { getAllBlogs, createBlog } from "@/lib/blogService";

export async function POST(req) {
    const body = await req.json();
    const blog = await createBlog(body);
    return NextResponse.json(blog, { status: 201 });
}

export async function GET() {
    const blogs = await getAllBlogs();
    return NextResponse.json(blogs);
}
