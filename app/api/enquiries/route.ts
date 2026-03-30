import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Handle the customer enquiry submission logic here
        // For example, sending it to a database or an external API

        // Returning a success response
        return NextResponse.json({ message: 'Enquiry submitted successfully!' }, { status: 200 });
    } catch (error) {
        // Handle any errors
        return NextResponse.json({ message: 'An error occurred while submitting your enquiry.', error: error.message }, { status: 500 });
    }
}
