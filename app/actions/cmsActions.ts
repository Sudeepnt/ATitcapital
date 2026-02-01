"use server";

import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "app/data/content.json");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "Sudeepnt";
const REPO_NAME = "ATitcapital";
const FILE_PATH = "app/data/content.json"; // Path in the repo
const BRANCH = "main"; // Or 'master' depending on your default

export async function saveCMSData(data: any): Promise<{ success: boolean; error?: string }> {
    // 1. Local Development: Save to filesystem
    if (process.env.NODE_ENV === "development" || !GITHUB_TOKEN) {
        try {
            // If local but no token, just warn and try FS (will fail in prod)
            if (process.env.NODE_ENV === "production" && !GITHUB_TOKEN) {
                return { success: false, error: "Missing GITHUB_TOKEN. Cannot save in production." };
            }
            const jsonString = JSON.stringify(data, null, 2);
            await fs.writeFile(DATA_FILE_PATH, jsonString, "utf8");
            return { success: true };
        } catch (err: any) {
            console.error("Error saving locally:", err);
            return { success: false, error: err.message };
        }
    }

    // 2. Production (Vercel): Save to GitHub
    try {
        const jsonString = JSON.stringify(data, null, 2);
        const contentEncoded = Buffer.from(jsonString).toString("base64");

        // A. Get the current file SHA (required for update)
        const getFileRes = await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}?ref=${BRANCH}`,
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
                cache: "no-store", // Critical: Don't use cached SHA
            }
        );

        if (!getFileRes.ok) {
            throw new Error(`Failed to fetch current file SHA: ${getFileRes.statusText}`);
        }

        const fileData = await getFileRes.json();
        const sha = fileData.sha;

        // B. Commit the update
        const updateRes = await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: "CMS Update: Content updated via Admin Portal",
                    content: contentEncoded,
                    sha: sha,
                    branch: BRANCH,
                }),
            }
        );

        if (!updateRes.ok) {
            const errorData = await updateRes.json();
            throw new Error(`GitHub Commit Failed: ${errorData.message}`);
        }

        return { success: true };

    } catch (err: any) {
        console.error("Error saving to GitHub:", err);
        return { success: false, error: err.message };
    }
}

export async function getCMSData(): Promise<any> {
    try {
        const fileContent = await fs.readFile(DATA_FILE_PATH, "utf8");
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error reading CMS data:", error);
        // Return null or a default structure to avoid crashing
        return null;
    }
}
