import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

interface FormData {
    name: string;
    email: string;
    date: string;
    budget: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        try {
            const formData: FormData = await req.json();
            const { name, email, date, budget } = formData;

            // Use Prisma to insert data into the database
            const newData = await prisma.formData.create({
                data: {
                    name,
                    email,
                    Date: date,
                    budget,
                },
            });

            return NextResponse.json({ message: 'Data saved successfully', data: newData });
        } catch (error) {
            console.error('Error saving data to the database:', error);
            return NextResponse.json({ error: 'An error occurred while saving data' }, { status: 500 });
        }
    }

    return NextResponse.json({ status: 201 });
}

export async function GET() {
    try {
        // Use Prisma to retrieve data from the database
        const formData = await prisma.formData.findMany();

        return NextResponse.json({ data: formData });
    } catch (error) {
        console.error('Error reading data from the database:', error);
        return NextResponse.json({ error: 'An error occurred while reading data' }, { status: 500 });
    }
}