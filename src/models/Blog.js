import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, unique: true },
        author: { type: String, required: true },
        category: { type: String },
        content: { type: String, required: true },
        images: [String],
        videos: [String],
        meta: {
            title: String,
            description: String,
            keywords: [String],
        },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
