import { NextResponse } from 'next/server';

import { getProducts } from '../../../lib/db';

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.error();
  }
}