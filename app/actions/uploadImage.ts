"use server";

import fs from "fs/promises";
import path from "path";

const PROTECTED_IMAGES = ["guru.jpeg", "utsav.jpeg"];

export async function uploadImage(formData: FormData): Promise<{ success: boolean; path?: string; error?: string }> {
    try {
        const file = formData.get("file") as File;
        const memberName = formData.get("memberName") as string;

        if (!file) {
            return { success: false, error: "No file provided" };
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create a clean filename based on member name
        const cleanName = memberName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");

        const ext = file.name.split(".").pop() || "jpg";
        const filename = `${cleanName}-${Date.now()}.${ext}`;
        const publicPath = path.join(process.cwd(), "public", filename);

        // Save the file
        await fs.writeFile(publicPath, buffer);

        return { success: true, path: `/${filename}` };
    } catch (err: any) {
        console.error("Error uploading image:", err);
        return { success: false, error: err.message };
    }
}

export async function deleteImage(imagePath: string): Promise<{ success: boolean; error?: string }> {
    try {
        // Don't delete protected images
        const filename = imagePath.split("/").pop() || "";
        if (PROTECTED_IMAGES.includes(filename)) {
            return { success: true }; // Silently succeed, don't actually delete
        }

        // Don't delete if it's a default/placeholder
        if (imagePath.includes("placeholder")) {
            return { success: true };
        }

        const fullPath = path.join(process.cwd(), "public", filename);

        // Check if file exists before deleting
        try {
            await fs.access(fullPath);
            await fs.unlink(fullPath);
        } catch {
            // File doesn't exist, that's fine
        }

        return { success: true };
    } catch (err: any) {
        console.error("Error deleting image:", err);
        return { success: false, error: err.message };
    }
}
