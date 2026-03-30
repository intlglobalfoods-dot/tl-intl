import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Here you can add your logic to fetch customer reviews
    // For example, you can call a database or an external API
    const reviews = await fetch('https://api.example.com/reviews');
    const data = await reviews.json();

    return NextResponse.json(data);
}