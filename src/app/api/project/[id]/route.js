import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export async function GET(_, { params }) {
    await connectDB();
    const project = await Project.findById(params.id);
    return NextResponse.json(project);
}

export async function PUT(req, { params }) {
    await connectDB();
    const data = await req.json();
    const updatedProject = await Project.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json(updatedProject);
}

export async function DELETE(_, { params }) {
    await connectDB();
    await Project.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Project deleted" });
}
