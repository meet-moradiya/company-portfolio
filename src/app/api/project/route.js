import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export async function GET() {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
}

export async function POST(req) {
    await connectDB();
    const data = await req.json();
    const newProject = await Project.create(data);
    return NextResponse.json(newProject, { status: 201 });
}
