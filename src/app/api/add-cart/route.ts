import { NextResponse } from 'next/server';
import { db } from '../../../../lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
        idBuku,
        emailPembeli
    } = body;

    const newCart = await db.cart.create({
      data: {
        idBuku,
        emailPembeli
      },
    });

    return NextResponse.json(newCart);
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
