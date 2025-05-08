import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, unique: true },
        category: { type: String },
        description: { type: String, required: true },
        technologies: [String],
        liveUrl: String,
        repoUrl: String,
        image: [String],
        video: [String],
        meta: {
            title: String,
            description: String,
            keywords: [String],
        },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
