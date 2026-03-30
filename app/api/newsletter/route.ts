import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    const email = data.email;

    // Here you would typically add logic to handle the newsletter signup, like saving the email to a database.
    // This is a placeholder response.
    return NextResponse.json({ message: `Successfully signed up ${email}` }, { status: 200 });
}