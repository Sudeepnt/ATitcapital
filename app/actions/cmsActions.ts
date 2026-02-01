"use server";

import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "app/data/content.json");

export async function saveCMSData(data: any): Promise<{ success: boolean; error?: string }> {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        await fs.writeFile(DATA_FILE_PATH, jsonString, "utf8");
        return { success: true };
    } catch (err: any) {
        console.error("Error saving CMS data:", err);
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
