// pages/api/upload.ts

import { NextResponse } from 'next/server';
import { extractRevenueFromDocument } from '@/lib/openai';
// import fs from 'fs';

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        console.log('Received form data:', data);
        const file = data.get('file') as File;
        const result = await extractRevenueFromDocument(file);
        return NextResponse.json({ data: result, message: 'File Uploaded' }, { status: 200 });
    }
    catch (error) {
        console.error('Error in file upload:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

    }
};

