// lib/openai.ts

import fs from "fs";
import OpenAI from "openai";
import formidable from "formidable";

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

export async function extractRevenueFromDocument(data: unknown)  {
    const file = data as formidable.File;
    const fileData = fs.createReadStream(file.filepath);

    const uploadedFile = await openai.files.create({
        file: fileData,
        purpose: "user_data",
    });

    const response = await openai.responses.create({
        model: "gpt-4o",
        input: [
            {
                role: "user",
                content: [
                    {
                        type: "input_file",
                        file_id: uploadedFile.id,
                    },
                    {
                        type: "input_text",
                        text: "Extract the revenue from the document and return it in float USD. If the document does not contain any revenue information, return 0.",
                    },
                ],
            },
        ],
    });

    return {
        revenueUSD: parseFloat(response.output_text) || 0, // Ensure the result is a float
    };
}