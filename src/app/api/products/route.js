import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET() {
    return NextResponse.json(products);
}

// POST request handle করার জন্য
export async function POST(request) {
    const newProduct = await request.json();
    newProduct.id = products.length + 1; // সহজ ID জেনারেট
    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
}