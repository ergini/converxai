import { readFile, appendFile } from 'fs/promises'; // Import the necessary file system module
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === "POST") {
        try {
            const formData = await req?.json();
            if (formData !== null) { // check if formData is not null
                await appendFile("./data.json", JSON.stringify(formData) + ',\n');
            }

            return NextResponse.json({ message: "formSent" });

        } catch (error) {
            console.error("Error saving data to file:", error);
            return NextResponse.json({ error: "An error occurred while saving data" }, { status: 500 });
        }
    }

    return NextResponse.json({ status: 201 });
}

export async function GET() {
    try {
        const data = await readFile("./data.json", "utf-8");
        return NextResponse.json({ data: JSON.parse(`[${data.slice(0, -2)}]`) });
    } catch (error) {
        console.error("Error reading data from file:", error);
        return NextResponse.json({ error: "An error occurred while reading data" }, { status: 500 });
    }
}
