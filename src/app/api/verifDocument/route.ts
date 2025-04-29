// pages/api/upload.ts

import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { extractRevenueFromDocument } from '@/lib/openai';
// import fs from 'fs';

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing so formidable can handle it
    },
};

export async function POST(req: NextApiRequest) {
    try {
        const form = formidable({ multiples: false });
        let file: formidable.File | null = null;

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error parsing file:', err);
                return NextResponse.json({ message: 'File upload error' }, { status: 500 });
            }

            const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;

            if (!uploadedFile) {
                return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
            }

            // Example: Log file info
            console.log('Uploaded file:', uploadedFile.originalFilename);

            file = uploadedFile;
        });
        const result = await extractRevenueFromDocument(file);
        return NextResponse.json({data:result, message: 'File upload in progress' }, { status: 200 });
    }
    catch (error) {
        console.error('Error in file upload:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

    }
};

